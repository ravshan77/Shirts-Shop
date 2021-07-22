import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const AdminPanel = () => {
  const [data, updateData] = useState();

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(
        "https://nike-ecommerce-default-rtdb.firebaseio.com/nike-shop"
      );
      const json = await resp.json();
      updateData(json);
    };
    getData();
  });

  let title_V, id_V, pirce_V, descr_V, count_V;

  function Ready() {
    title_V = document.getElementById("title").value;
    id_V = document.getElementById("id").value;
    pirce_V = document.getElementById("price").value;
    descr_V = document.getElementById("descrption").value;
    count_V = 1;
  }

  // ---------- insert Process -------------//
  const handleInsert = () => {
    Ready();

    firebase
      .database()
      .ref("product/" + id_V)
      .set({
        title: title_V,
        id: id_V,
        pirce: pirce_V,
        description: descr_V,
        count: count_V,
      });
  };

  // ---------- Selection Process -------------//
  const handlSelction = () => {
    Ready();

    firebase
      .database()
      .ref("product/" + id_V)
      .on("value", function (snapshot) {
        document.getElementById("title").value = snapshot.val().title;
        document.getElementById("id").value = snapshot.val().id;
        document.getElementById("price").value = snapshot.val().pirce;
        document.getElementById("descrption").value =
          snapshot.val().description;
      });
  };

  // ---------- upDate Process -------------//
  const handleUpDate = () => {
    Ready();

    firebase
      .database()
      .ref("product/" + id_V)
      .update({
        title: title_V,
        id: id_V,
        pirce: pirce_V,
        description: descr_V,
        count: count_V,
      });
  };

  // ---------- Delete Process -------------//
  const handleDelete = () => {
    Ready();

    firebase
      .database()
      .ref("product/" + id_V)
      .remove();
  };

  // console.log(JSON.parse(""));
  return (
    <div>
      title <input type="text" id="title"></input> <br></br>
      id No <input type="number" id="id"></input> <br></br>
      pirce <input type="number" id="price"></input> <br></br>
      description <input type="text" id="descrption"></input> <br></br>
      <button id="insert" onClick={() => handleInsert()}>
        insert
      </button>
      <button id="select" onClick={() => handlSelction()}>
        select
      </button>
      <button id="update" onClick={() => handleUpDate()}>
        update
      </button>
      <button id="delete" onClick={() => handleDelete()}>
        delete
      </button>
    </div>
  );
};

export default AdminPanel;
