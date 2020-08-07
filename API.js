require $_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php';

if (CModule::IncludeModule("sale") && CModule::IncludeModule("catalog")) {

function productAddToBasket($PRODUCT_ID=0,$QUANTITY=0) {
  return Add2BasketByProductID($PRODUCT_ID,$QUANTITY,array());
}

function productDeleteFromBasket($PRODUCT_ID=0) {
//// Выполняем запрос в корзину узнаём есть ли у неё элемент с Ид_товара
  $a = CSaleBasket::GetList(// Выполняем запрос в корзину узнаём есть ли у неё элемент с Ид_товара
    $arOrder = array(),
    $arFilter = array("PRODUCT_ID"=>$PRODUCT_ID),
    $arGroupBy = false,
    $arNavStartParams = false,
    $arSelectFields = array()
  );
  if (count($a->arResult)) {// Если есть получаем Ид этого элемента в корзине(может не совпадать с Ид товара)
    $idProductInBasket = $a->arResult[0]["ID"];
    $arFields_new = array("QUANTITY"=>0);
    return CSaleBasket::Update($idProductInBasket, $arFields_new);
  }
  return false;
}

function productUpdateInBasket($PRODUCT_ID=0,$QUANTITY=0) {
//// Выполняем запрос в корзину узнаём есть ли у неё элемент с Ид_товара
  $a = CSaleBasket::GetList(// Выполняем запрос в корзину узнаём есть ли у неё элемент с Ид_товара
    $arOrder = array(),
    $arFilter = array("PRODUCT_ID"=>$PRODUCT_ID),
    $arGroupBy = false,
    $arNavStartParams = false,
    $arSelectFields = array()
  );
  if (count($a->arResult)) {// Если есть получаем Ид этого элемента в корзине(может не совпадать с Ид товара)
    $idProductInBasket = $a->arResult[0]["ID"];
    $arFields_new = array("QUANTITY"=>$QUANTITY);
    return CSaleBasket::Update($idProductInBasket, $arFields_new);
  }
  return false;
}


//productAddToBasket(5,90);// Пример добавления
//var_dump(productDeleteFromBasket(5));// Пример удаления
//productUpdateInBasket(5,155);//Пример обновления
}// закрываем верхнее условие

