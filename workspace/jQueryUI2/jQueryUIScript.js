/* Eje1 */
let $lista = $(".reserves").find("li");

$lista.draggable({
  revert: "invalid",
  helper: "clone",
  cursor: "move"
});

$lista.droppable({
  accept: $lista,
  drop: function(ev, ui) {
    changeList(ui.draggable);
  }
});

function changeList($item) {
  $item.fadeOut(function() {
    $($item)
      .appendTo(".reserves")
      .fadeIn();
  });
}

/* Eje2 */
let $lista1 = $(".reserves");
let $lista2 = $(".reservesAcceptades");
$("li", $lista1).draggable({
  revert: "invalid",
  helper: "clone",
  cursor: "move"
});
$lista1.droppable({
  accept: ".reservesAcceptades li",
  drop: function(ev, ui) {
    deleteLista2(ui.draggable);
  }
});
$("li", $lista2).draggable({
  revert: "invalid",
  helper: "clone",
  cursor: "move"
});
$lista2.droppable({
  accept: ".reserves > li",
  drop: function(ev, ui) {
    deleteLista1(ui.draggable);
  }
});
function deleteLista1($item) {
  $item.fadeOut(function() {
    $($item)
      .appendTo($lista2)
      .fadeIn();
  });
  $item.fadeIn();
}
function deleteLista2($item) {
  $item.fadeOut(function() {
    $item.appendTo($lista1).fadeIn();
  });
}

/*Eje n3 */
/**
 * !no funciona
 */
let label = document.createElement("label");
let date = document.createElement("p");

$(label).text("Date:");
$(date).addClass("datepicker");

$(label).appendTo(".form-group");
$(date).appendTo(".form-group");

let fecha = new Date();
$(".datepicker").datepicker({
  format: "dd/mm/yyyy",
  startDate:
    fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear(),
  todayHighlight: true,
  language: "es",
  todayBtn: "linked"
});

/* Eje 4*/
let $obj = $(".sortable").find("li");
$obj.draggable({
  revert: "invalid",
  helper: "clone",
  cursor: "move"
});
$("#papelera").droppable({
  accept: $obj,
  drop: function(ev, ui) {
    deleteItem(ui.draggable);
  }
});
function deleteItem($item) {
  $item.fadeIn(function() {
    $item.toggle("explode");
    setInterval(function() {
      $($item).remove();
    }, 4000);
  });
}
