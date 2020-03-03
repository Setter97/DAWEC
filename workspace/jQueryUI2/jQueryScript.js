/**
 * Ejercicio n1
 */
$(".btn-block").hide();
$(".panel-body").mouseleave(function() {
  $(this)
    .find(".btn-block")
    .slideUp();
});
$(".panel-body").mouseover(function() {
  $(this)
    .find(".btn-block")
    .slideDown();
});

/**
 * Ejercicio n2
 */
$(".eliminar").click(function() {
  confirm(
    "Segur que vols eliminar el viatge a " +
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".panel-heading")
        .text() +
      "?"
  );
});

/**
 * Ejercicio n3
 */
$(".col-sm-4")
  .find("li")
  .click(function() {
    if (!$(this).hasClass("disabled")) {
      $(".col-sm-4")
        .find("li")
        .removeClass("active");

      $(this).addClass("active");
    }

    if ($(this).text() === "Promocions") {
      $(".viatge").each(function() {
        if (!$(this).hasClass("promocio")) $(this).slideUp();
      });
    } else {
      $(".viatge").slideDown();
    }
  });
$(".promo").click(function() {
  let div = $(this)
    .parent()
    .parent()
    .parent();

  let dataPreu = parseInt(div.attr("data-preu"));
  let dataDte = parseFloat(div.attr("data-dte") / 100);

  let descompte = dataPreu * dataDte;
  let resultat = dataPreu - descompte;

  div.find(".preu").append(`<br>${resultat}€ amb la promoció`);
  $(this).hide();

  let finalitzar = document.createElement("button");
  finalitzar.textContent = "Finalitzar promoció";
  finalitzar.className = "finalitzarPromo btn btn-info btn-sm";

  $(div).addClass("promocio");

  finalitzar.addEventListener("click", function() {
    $(this)
      .parent()
      .parent()
      .find(".preu")
      .text(`${dataPreu}€ per setmana`);
    $(this)
      .parent()
      .find(".promo")
      .show();
    $(this).remove();

    $(div).removeClass("promocio");
  });

  $(this)
    .parent()
    .append(finalitzar);
});

/**
 * Ejercicio n4
 */
let price, title;
$(".reservar").click(function() {
  let $parent = $(this)
    .parent()
    .parent();
  let regex = RegExp("([0-9]*.?[0-9]*)(€ per setmanta)([0-9]*.?[0-9]*)");
  let preu = $parent.find(".preu").text();
  title = $parent.find(".panel-heading").text();
  if (!$parent.hasClass("promocio")) {
    price = preu.match(regex)[1];
  } else {
    price = preu.match(regex)[3];
  }
});

$(".okReservar").click(function() {
  let li = document.createElement("li");
  let p = document.createElement("p");
  let numPersones = $("#numPersones").val();
  $(li).addClass("well well-sm");

  let parse = function format(price, numPer) {
    let quantity = price.toString().replace(/\./g, "");
    let total = new String(parseInt(quantity) * numPer);
    total = total
      .split("")
      .reverse()
      .join("")
      .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
    total = total
      .split("")
      .reverse()
      .join("")
      .replace(/^[\.]/, "");

    return total;
  };

  let text =
    "<b>" +
    title +
    "</b>: " +
    "reserva en nom de " +
    $("#nomReserva").val() +
    "<br>" +
    "Nombre de persones: " +
    numPersones +
    "<br>" +
    "Preu Total: " +
    parse(price, numPersones) +
    "€" +
    "<br>" +
    "Fecha de reserva: " +
    $(".datepicker").val();
  $(p).prepend(text);
  li.appendChild(p);
  $(".reserves").append(li);
});
