var fs = require('fs');
var readline = require('readline-sync');




//Ниже представлен массив содержащий в себе строки изображения.
//Количество строк влияет на высоту изображения.

//Каждая строка, разбита на 10 блоков.
//Количество блоков влияет на ширину изображения.

//Таким образом, можно представить изображение в вида массива ячеек. imagearray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Исходя из полученной цифры в консоль, в ячейку подставляется необходимый код. 

//Ниже представлен пример, если бы изображение имело высоту 5 строк, и могло поместить в себе всего 2 числа.

//В консоль получено число 9

/*                 Блок 1                   Блок 2
Строка 1>  Код цифры 9 для строки 1     Код пустой строки                
Строка 2>  Код цифры 9 для строки 2     Код пустой строки
Строка 3>  Код цифры 9 для строки 3     Код пустой строки
Строка 4>  Код цифры 9 для строки 4     Код пустой строки
строка 5>  Код цифры 9 для строки 5     Код пустой строки */

//Изначально ячейки содержат в себе "Пустой код" для формирования свободного места в изображении, которое может быть заполнено числами.

//"Пустой код" для создания свободного пространства в изображении.
var rawwithf = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";

//Непосредственно массив.

let pixelrow = [
//Строка 1
   [
   //Блоки
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 2
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 3
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 4
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 5
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 6
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 7
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 8
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 9
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 10
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 11
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 12
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 13
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 14
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 15
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 16
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 17
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
//Строка 18
[
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
   {rowpart: rawwithf},
],
];


//Двумерный массив содержащий в себе строки чисел.
//Первая строка кода =  для первого столбика в массиве ниже.
let numberarray = [
   //Число 0
   [
   {code:"FFFFFFFFFFFFFFFFFFFFDBFFFF6690B6003A3A0000000000003A000090663AFFDBB6FFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFB6FFFF003A66000000000000000000000000000000000000000000DB903AFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFDBFFFF003A900000003A0000DBB666FFFFFFFFFFFFB6DBFF003A90000000000000FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF90DBFF00003A000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000903AFFFFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF0000003A00FFFFFFFFFFFF"},
   {code:"FFFFFFFF0066B6000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000FFFFFFFFFF"},
   {code:"FFFFFFFF003A90000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000FFFFFFFFFF"},
   {code:"FFFFFFFF000066000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000FFFFFFFFFF"},
   {code:"FFFFFFFF000066000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000FFFFFFFFFF"},
   {code:"FFFFFFFF000066000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000FFFFFFFFFF"},
   {code:"FFFFFFFF000066000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000FFFFFFFFFF"},
   {code:"FFFFFFFF003A90000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000FFFFFFFFFF"},
   {code:"FFFFFFFF0066B6000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF0000003A0000FFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF000066000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A900000006600FFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A90DB000000000000B6903AFFFFDBFFFFFFDBFFFF3A66B6000000000000DB90FFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF3A66B6000000000000000000000000000000000000000000B66600FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFF90B6DB3A3A66000000000000000000663A3ADBB690FFFFFFFFFFFFFFFFFFFFFF"},
],
//Число 1
[
   {code:"FFFFFFFFFFFFFF3A90DB000000000000000000000000000000000000000000000000000000660000FFFFB6FFFF"},
   {code:"FFFFFFFFFFFFFF66B6FF000000000000000000000000000000000000000000000000000000660000FFFFB6FFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A90DB90663AFFDBB6FFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A90DB000000000000B6663A90DBDB00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF6690DB00003A000000000000000000000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFB6DBFF003A66000000000000000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6DB00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
],
//Число 2
[
   {code:"FFFFFFFF66B6FF000000000000000000000000000000000000000000000000000000000000660000FFFFFFFFFF"},
   {code:"FFFFFFFF66B6FF000000000000000000000000000000000000000000000000000000000000660000FFFFFFFFFF"},
   {code:"FFFFFFFFDBFFFF003A90000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFB6FFFF003A66000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFB6FFFF000066000000663A00FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFB6DBFF000066000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF000000000000DB903AFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B60000003A0000FFDB90FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000B66600FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000660000FFFFB6FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB0000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB0000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A900000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF3A006690663ADBDBB6FFFFFFFFFFFFDBFFFF3A66B6000000000000903A00FFFFDBFFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF003A90000000000000000000000000000000000000000000660000FFDBB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF90B6DB3A669000003A0000000000003A0000B6663AFFFFDBFFFFFFFFFFFFFFFFFFFFFF"},
],
//Число 3
[
   {code:"FFFFFFFFFFFFFFB6DBFF666690003A3A0000000000000000003A3A00B69066FFDBDBFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB0000000000000000000000000000000000000000000000003A0000DBB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB663A00B69090FFDBDBFFFFFFFFFFFFFFFFFF90B6DB00003A0000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000903A00FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000903A00FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF000000000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBDBFF3A66B600003A000000660000FFFFB6FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF0066B6000000000000000000000000000000000000B6663AFFFFDBFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF3A90DB3A3A3A3A3A3A00003A00000000000090663AFFDBB6FFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6DBFF003A90000000660000FFFFB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000B66600FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000660000FFFFB6FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB0000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000660000FFFFB6FFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF3A006690663ADBDBB6FFFFFFFFFFFFDBFFFF3A66B6000000000000B66600FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFDBFFFF003A90000000000000000000000000000000000000000000660000FFFFB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF90B6DB3A3A6600003A0000000000003A0000B6663AFFFFDBFFFFFFFFFFFFFFFFFFFFFF"},
],
//Число 4
[
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF000000000000000000000000000000000000000000000000000000000000000000000000FFFFFFFFFF"},
   {code:"FFFFFFFF000000000000000000000000000000000000000000000000000000000000000000000000FFFFFFFFFF"},
   {code:"FFFFFFFF0000663A0000FFDB90FFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000903A00FFFFDBFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFDBFFFF003A90000000FFB666FFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF90DBFF00003A660000FFFFB6FFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF0066B6000000B66600FFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFB6FFFF0000663A0000FFDB90FFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000903A00FFFFDB90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000DB903A90DBFF00003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A66000090DBB600003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B60000003A3A0000003A000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000000000000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF0000000000003A0000FFB690FFFFFFFFFFFFFFFF"},
],
//Число 5
[
   {code:"FFFFFFFFFFFFFF90B6DB3A3A6600003A000000000000000000663A3ADBB690FFFFDBFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000000000000000000000000000000000000000000000663A00FFDBB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB663A00DBB690FFFFDBFFFFFFFFFFFFDBFFFF66B6DB00003A000000660000FFFFB6FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000DB903AFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000903A00FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000660000FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000660000FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFDBDBDBFFFFFFFFFFFFFFFFFFDBFFFF66B6DB00003A000000000000FFB666FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B60000000000000000000000000000000000000000003A0000DBB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B60000003A00003A3A3A3A3A3A3A3A3A66663ADBB690FFFFDBFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000000000000000000000000000000000000000000000903A00FFFFDBFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A90DB000000000000000000000000000000000000000000000000903A00FFFFDBFFFFFFFFFF"},
],
//Число 6
[
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFF66B6DB003A3A000000000000000000663A3ADBB690FFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF0066B6000000000000000000000000000000000000000000B6663AFFFFDBFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A90DB000000000000B6663AFFFFDBFFFFFFDBFFFF3A90B6000000000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFDBFFFF003A90000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFF3A90DB0000003A0000FFFFFFFFFF"},
   {code:"FFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFFFFFFFFF"},
   {code:"FFFFFFFF66B6FF0000003A0000FFDB90FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB00000000000090663AFFDBB6FFFFFFFFFFFFFFFFFFB6DBFF003A90000000660000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB0000000000000000000000000000003A3A3A003A3A000000000000000000DB903AFFFFFFFFFF"},
   {code:"FFFFFFFF66B6FF000000660000DBFFB66690B6003A3A000000000000000000663A3AFFDBB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF90DBFF00003A3A0000FFDB90FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF000066000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF3A90DB0000003A0000DBB666FFFFFFFFFFFFFFFFFFFFFFFFB6DBFFFFDBB6FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFF3A66B60000000000000000003A3A3A3A3A3A000000000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6DBFF3A669000003A0000000000003A0000663A3AFFDB90FFFFFFFFFF"},
],
//Число 7
[
   {code:"FFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF000000000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB0000003A0000FFDB90FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000903A00FFFFDBFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF000000000000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000B66600FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF0000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000660000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000000000000000000000000000000000000000000000000000000000000000FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000000000000000000000000000000000000000000000000000000000000000FFFFFFFFFF"},
],
//Число 8
[
   {code:"FFFFFFFFFFFFFFFFFFFFB6DBDB3A669000003A0000000000000000003A3A3AB69066FFFFDBFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A66B60000000000000000003A3A003A3A3A00003A0000000000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB000000000000B6663AFFFFDBFFFFFFFFFFFFFFFFFFB6DBFF003A90000000660000FFFFFFFFFF"},
   {code:"FFFFFFFF003A90000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFFFFFFFFF"},
   {code:"FFFFFFFF003A90000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000FFFFFFFFFF"},
   {code:"FFFFFFFF0066B6000000903A00FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF90DBFF00003A000000FFFFFFFFFF"},
   {code:"FFFFFFFF90DBFF00003A000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000660000FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF66B6DB00003A000000B6663AFFFFDBFFFFFF66B6DB00003A0000003A0000FFB666FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFB6DBFF003A66000000000000000000000000000000663A00FFDBB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFF66B6DB00003A000000000000000000B6663AFFFFDBFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFDBFFFF3A66B6000000000000663A0090B690003A66000000663A00FFDBB6FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF0066B6000000000000DB903AFFFFFFFFFFFFDBFFFF0066B6000000660000FFFFB6FFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF000066000000DB903AFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF003A90000000DB903AFFFFFFFFFF"},
   {code:"FFFFFFFF90DBFF00003A3A0000FFDB90FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000903A00FFFFFFFFFF"},
   {code:"FFFFFFFF90DBFF00003A000000FFB666FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000903A00FFFFFFFFFF"},
   {code:"FFFFFFFFDBFFFF003A90000000660000FFDBB6FFFFFFFFFFFFFFFFFF66B6DB000000000000DB903AFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFB6FFFF003A660000000000003A3A003A3A3A000000000000000000903A00FFFFDBFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFDBFFFF6690B6003A3A0000000000000000003A3A00DBB666FFFFDBFFFFFFFFFFFFFFFF"},
],
//Число 9
[
   {code:"FFFFFFFFDBFFFF6690B6003A3A0000000000000000003A3A3AB69066FFFFDBFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFF66B6FF0000000000000000000000000000000000000000003A0000FFDB90FFFFFFFFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFB6DBFF909066DBDBB6FFFFFFFFFFFFFFFFFFB6DBDB003A660000003A0000FFDB90FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDBFFFF0066B6000000903A00FFFFDBFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000FFB666FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000B66600FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF000000660000FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFF90B6DB3A3A660000000000000000003A3A00B6906690B6DB00003A3A0000FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF3A66B60000000000000000003A3A3A3A3A3A0000000000000000000000003A0000FFFFFFFFFF"},
   {code:"FFFFFFFF66B6FF000000000000B66600FFFFDBFFFFFFFFFFFFFFFFFFB6DBFF003A660000003A0000FFFFFFFFFF"},
   {code:"FFFFFFFF0066B6000000660000FFFFB6FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF0000003A0000FFFFFFFFFF"},
   {code:"FFFFFFFF003A90000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF66B6FF0000003A0000FFFFFFFFFF"},
   {code:"FFFFFFFF003A90000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3A90DB000000660000FFFFFFFFFF"},
   {code:"FFFFFFFF0066B6000000B66600FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0066B6000000903A00FFFFFFFFFF"},
   {code:"FFFFFFFF3A90DB0000003A0000FFDB90FFFFFFFFFFFFFFFFFFFFFFFFB6FFFF000066000000DB903AFFFFFFFFFF"},
   {code:"FFFFFFFFB6FFFF000066000000903A00FFDBB6FFFFFFFFFFFFDBFFFF003A900000003A0000FFDB90FFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFF90DBFF00003A0000000000003A3A00003A3A0000000000003A0000FFB666FFFFFFFFFFFFFFFF"},
   {code:"FFFFFFFFFFFFFFFFFFFFDBFFFF6690B6003A3A000000000000000000663A3AFFDBB6FFFFFFFFFFFFFFFFFFFFFF"},
]
];



//Код для создания свободного пространства в изображении.
var rawwithf = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";

//"Пустой код" для формирования отступа сверху и снизу изображения.
let indentroof = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000";

//"Пустой код" для формирования левого и правого отступа в изображении.
let indentleft = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
let indentright = "FFFFFFFFFFFFFFFFFFF0000";


//Заголовок hex кода, содержащий в себе информацию для интерпретатора изображения.
//Так-же переменная hexcode служит контейнером, в который записывается весь код для передачи в изображение.
let hexcode = "424D923D00000000000036000000280000009E0000002100000001001800000000005C3D000000000000000000000000000000000000";


//Формирование верхнего отступа в изображении.
for(let index = 0; index < 5; index++) {
   hexcode = hexcode + indentroof;
}


//Массив для введённых через консоль чисел.
let arrowhead = [];

//Получение числа из консоли, запись числа в массив.
//Разбие чисел на отдельные элементы массива.
var msginput = readline.question("Enter a number");
arrowhead = msginput.toString()
.split('')
.map(function(item, index) {
return parseInt(item);
});



//Цикл, который исходя из полученных чисел, вставляет необходимый код в блоки строк.
//Архитектура программы устроена таким образом, что данный цикл формирует не готовую строку, а готовые блоки.


//i равняется количеству полученных чисел в массиве.
//index равняется количеству строк в изображении, или же высоте изображения.

for (let i = 0; i < arrowhead.length; i++){
for (let index = 0; index < 18; index++) {
    
   pixelrow[index][i].rowpart = numberarray[arrowhead[i]][index].code;
   if(i == 0)
   {
   //Добавление левого отступа, если число = первое в массиве.
   pixelrow[index][i].rowpart = indentleft + pixelrow[index][i].rowpart;
   }
}};

//Переменная для формирования одной готовой строки изображения.
var readyrow = "";


//Цикл предназначенный для формирования готовой к импортированию в изображение строки кода.

//i = количество строк, которое необходимо записать в контейнер hexcode
//index = Количество блоков, которое содержит в себе каждая строка.
//readyrow вбирает в себя блоки одной строчки, тем самым формируя готовую к записи в изображение строку.
//hexcode перенимает в себя эту строку.

for (let i = 0; i < 18; i++) {
   hexcode = hexcode + readyrow;
   var readyrow = "";
for(let index = 0; index < 10; index++) {
   readyrow = readyrow + pixelrow[i][index].rowpart;
   if(index == 9){
      //Добавление правого отступа, если формируется последний блок строки.
      readyrow = readyrow + indentright;
   }
}};
hexcode = hexcode + readyrow;




//Добавление нижнего отступа.
for(let index = 0; index < 10; index++) {
   hexcode = hexcode + indentroof;
}


//Преобразование готовой строки кода в формат hex, запись кода в изображение.
var encodedImage = new Buffer(hexcode, 'hex');
fs.writeFile('number.png', encodedImage, (err) => {
  if (err) {
   console.error(err);
    return;
 }
 else
 {
    console.log("Image changed, exit initialzed");
 }
});


// Архитектура не из простых, алгоритмы можно оптимизировать, число массивов сократить с помощью "push", либо же вынести их в отдельный модуль.

/*.End



░░░░░░░░░░░░░░░░░
░░░░░▀▄░░░▄▀░░░░░
░░░░▄█▀███▀█▄░░░░
░░░█▀███████▀█░░░
░░░█░█▀▀▀▀▀█░█░░░
░░░░░░▀▀░▀▀░░░░░░
░░░░░░░░░░░░░░░░░ 


*/