// // items
const menu = [
    { 
    id: 1,
    title: "buttermilk pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },

{
    id: 2,
    title: "Lunch double",
    category: "Lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "diner Nord Africa",
    category: "Dinner",
    price: 25.99,
    img: "./images/item-3.jpeg",
    desc: `This is a common dinner in North african countries, including algeria mauritanie marroc and tunisia. slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  { 
  id: 4,
  title: "Chapaty Lunch",
  category: "Lunch",
  price: 10.99,
  img: "./images/item-6.jpg",
  desc: `This is a kenyan Recipe selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
},
{
   id:5,
   Title: "Cousous Plat",
   category: "Dinner",
   price: 15,
   img: "./images/item-7.jpg",
  desc: `This is a Marrocan and Mauritanian Dinner . selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
}
]

// // get parent element
// const sectionCenter = document.querySelector(".section-center");
// const container = document.querySelector(".btn-container");


// window.addEventListener("DOMContentLoaded", function () 
// {

//     displayMenuItems(menu);
//     displayMenuBtns();
    

// }

// );
// let menu = JSON.parse(localStorage.getItem("menu")) || [];

// function displayMenuItems(menu) {
//     let displayMenu = menu.map(function(item) {
//   return ` <article class="menu-item">
//       <img src=${item.img}  alt=${item.title} class="photo">
//       <div class="item-info">
//         <header>
//             <h4>
//              ${item.category}
//             </h4>
//             <h4 class="price">
//             ${item.price}

//             </h4>
//         </header>
//         <p class="item-text">
//         ${item.desc}
//         </p>
//       </div>
//       </article>`;
//     });
//     displayMenu = displayMenu.join("");
//     sectionCenter.innerHTML = displayMenu;
    
//   }
//   function displayMenuBtns() {
//     const categoryitems = menu.reduce(function(value, item) {
//       if (!value.includes(item.category)) {
//           value.push(item.category);
//       }
//       return value; // Continue the loop without an else block
//   }, ['all']);
//   const categoryBtns = categoryitems.map(function(c) {
//     return ` <button class="filter-btn"  type="button" data-name= ${c}> ${c}
//     </button>`
//     })
//     .join("");
//     container.innerHTML = categoryBtns;
//     const sectionBtn = container.querySelectorAll(".filter-btn");
// //filter 
// sectionBtn.forEach(function(btn) {
//   btn.addEventListener("click", function(e) {
//  const category = e.currentTarget.dataset.name;
//  const menucategory = menu.filter(function (menu) {
//   if (menu.category === category){
//     return menu;

//   }
//  })
//  if (category === "all"){
//   displayMenuItems(menu);
// }
//   else {
//     displayMenuItems(menucategory);
//   }
//   })
// })
//   }

//   function saveMenuToLocalStorage() {
//     localStorage.setItem("menu", JSON.stringify(menu));
//   }

// function addUserRecipe() {
//   console.log("Adding user recipe...");

//   const newTitle = document.getElementById("new-title").value;
//   const newCategory = document.getElementById("new-category").value;
//   const newPrice = parseFloat(document.getElementById("new-price").value);
//   const newImageInput = document.getElementById("new-image");
//   const newDescription = document.getElementById("new-description").value;

//   console.log("Title:", newTitle);
//   console.log("Category:", newCategory);
//   console.log("Price:", newPrice);
//   console.log("Image Input:", newImageInput.files);
//   console.log("Description:", newDescription);
//   if (newTitle && newCategory && !isNaN(newPrice) && newImageInput.files.length > 0 && newDescription) {
//     const newImage = URL.createObjectURL(newImageInput.files[0]);

//     const newRecipe = {
//       id: generateUniqueId(),
//       title: newTitle,
//       category: newCategory,
//       price: newPrice,
//       img: newImage,
//       desc: newDescription,
//     };

//     menus.push(newRecipe);

//     // Save the updated menu array to local storage
//     saveMenuToLocalStorage();

//     displayMenuItems(menu);
//     displayMenuBtns();

//     // Reset the form fields
//     document.getElementById("new-title").value = "";
//     document.getElementById("new-category").value = "Breakfast";
//     document.getElementById("new-price").value = "";
//     document.getElementById("new-image").value = "";
//     document.getElementById("new-description").value = "";
//   } else {
//     alert("Please fill in all fields.");
//   }
// }

// function generateUniqueId() {
//   return new Date().getTime();
// }


let userAddedMenu = JSON.parse(localStorage.getItem("userAddedMenu")) || [];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  // Combine constant menu and user-added menu
  const combinedMenu = [...menu, ...userAddedMenu];
  displayMenuItems(combinedMenu);
  displayMenuBtns();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="item-info">
        <header>
          <h4>${item.category}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
  const categoryItems = [...menu, ...userAddedMenu].reduce(function (value, item) {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  }, ['all']);
  const categoryBtns = categoryItems.map(function (c) {
    return `<button class="filter-btn" type="button" data-name="${c}">${c}</button>`;
  }).join("");
  container.innerHTML = categoryBtns;

  const sectionBtn = container.querySelectorAll(".filter-btn");

  sectionBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.name;
      const menuCategory = [...menu, ...userAddedMenu].filter(function (menuItem) {
        return category === "all" || menuItem.category === category;
      });
      displayMenuItems(menuCategory);
    });
  });
}

function saveMenuToLocalStorage() {
  localStorage.setItem("userAddedMenu", JSON.stringify(userAddedMenu));
}

function addUserRecipe() {
  console.log("Adding user recipe...");

  const newTitle = document.getElementById("new-title").value;
  const newCategory = document.getElementById("new-category").value;
  const newPrice = parseFloat(document.getElementById("new-price").value);
  const newImage = document.getElementById("new-image").value; // Update to get the value
  const newDescription = document.getElementById("new-description").value;

  if (newTitle && newCategory && !isNaN(newPrice) && newImage && newDescription) {
    const newRecipe = {
      id: generateUniqueId(),
      title: newTitle,
      category: newCategory,
      price: newPrice,
      img: newImage, // Update to use the value directly
      desc: newDescription,
    };

    userAddedMenu.push(newRecipe);

    saveMenuToLocalStorage();

    // Display the updated menu
    displayMenuItems([...menu, ...userAddedMenu]);
    displayMenuBtns();

    // Reset the form fields
    document.getElementById("new-title").value = "";
    document.getElementById("new-category").value = "Breakfast";
    document.getElementById("new-price").value = "";
    document.getElementById("new-image").value = "";
    document.getElementById("new-description").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

function generateUniqueId() {
  return new Date().getTime();
}
