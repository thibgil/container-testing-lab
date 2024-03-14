# Nextcloud behind Nginx

## Instructions
- Add a `.env` file in order to complete the docker-compose.
- Create some SSL Certificates by following the OpenSSL guide at the end of this README file.
- Add your key & cert in the `./nginx/ssl` folder.
- Edit the Nginx configuration in order to personalize your domain name redirection.

# OpenSSL Guide

## Private Key to become a local CA
```sh
openssl genrsa -des3 -out myCA.key 2048
```

## Root Certificate
```sh
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 1825 -out myCA.pem
```

## CA-Signed key
```sh
openssl genrsa -out your_domain_name.key 2048
```

## CSR
```sh
openssl req -new -key your_domain_name.key -out your_domain_name.csr
```

## Extension file `your_domain_name.ext`
```sh
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = your_domain_name
```

## Create final service cert
```sh
openssl x509 -req -in your_domain_name.csr -CA myCA.pem -CAkey myCA.key \
-CAcreateserial -out your_domain_name.crt -days 825 -sha256 -extfile your_domain_name.ext
```