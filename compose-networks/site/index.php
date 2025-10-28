<html>
    <body>
        <h1>Apparels prices:</h1>
            <ul>
                <?php
                    $json = file_get_contents('http://prices');
                    $price_items = json_decode($json);
                    foreach ($price_items as $price_item) {
                        echo "<li>$price_item->price</li>";
                    }
                ?>
            </ul>
        <h1>Apparels names:</h1>
            <ul>
                <?php
                    $json = file_get_contents('http://prices');
                    $name_items = json_decode($json);
                    foreach ($name_items as $name_item) {
                        echo "<li>$name_item->name</li>";
                    }
                ?>
            </ul>
    </body>
</html>