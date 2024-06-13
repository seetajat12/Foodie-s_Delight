const cuisines = {
    indian: [
        {
            name: "Chole Bhature",
            img: "chole btaure.jpg",
            videos: [
                "https://www.youtube.com/embed/FU1ZVLMbWjA?si=SgjHclYTIzUQGPvx",
                "https://www.youtube.com/embed/q1DPVaJJTmE?si=LLzQ6DhFaFbAYGgD",
                "https://www.youtube.com/embed/2v7GkZhIODo?si=iwiYG4BaFyx_GKwT"
            ],
            ingredients: [
                "2 cups chickpeas",
                "1 cup all-purpose flour",
                "Spices: turmeric, cumin, coriander, red chili powder"
            ]
        },
        {
            name: "Paneer Tikka",
            img: "paneer tikka.jpg",
            videos: [
                "https://www.youtube.com/embed/Nru8aadeN0I?si=DlKxcsSOo_8jK6HI",
                "https://www.youtube.com/embed/1DbrPChGnpk?si=mx0jJ5QYwDJzFrZ3" ,
                "https://www.youtube.com/embed/kZxmErE7V2E?si=cdtShOX2Oh_cW7Jo"
            ],
            ingredients: [
                "1 cup paneer cubes",
                "1 cup yogurt",
                "Spices: garam masala, turmeric, cumin powder"
            ]
        },
        {
            name: "Biryani",
            img: "biryani copy.jpg",
            videos: [
                "https://www.youtube.com/embed/7oD90adBkIM?si=nIk7pB0QQGW8Orhc" ,
                "https://www.youtube.com/embed/NtuIRDuIvgs?si=MeJ6hUcTjFXxgVny",
                "https://www.youtube.com/embed/nXb7UAQuI40?si=kibCIm5arCa3DkJf" 
            ],
            ingredients: [
                "2 cups basmati rice",
                "1 cup chicken or vegetables",
                "Spices: saffron, cardamom, cloves, cinnamon"
            ]
        },
        {
            name: "Kachori",
            img: "kachori.jpg",
            videos: [
                "https://www.youtube.com/embed/oBD0iAkxtFI?si=GzWLZGpiEYuhOS_B" ,
                "https://www.youtube.com/embed/OnU2I8uO1mQ?si=QmMDs0Ym_AErrF5-" ,
                "https://www.youtube.com/embed/La3JWkDt7Bs?si=_v-qet3DiMuJtBBG"
            ],
            ingredients: [
                "2 cups all-purpose flour",
                "1 cup moong dal",
                "Spices: cumin, coriander, fennel, asafoetida"
            ]
        },
        {
            name: "Samosa",
            img: "samosa.jpg",
            videos: [
                "https://www.youtube.com/embed/JgV8j4N73uc?si=B273-9gAs4LcULIf" ,
                "https://www.youtube.com/embed/NQbMQoMie84?si=iJFyCX7bBt4zcMLA" ,
            ],
            ingredients: [
                "2 cups all-purpose flour",
                "1 cup potatoes",
                "Spices: turmeric, cumin, coriander, red chili powder"
            ]
        },
        {
            name: "Dal Bati",
            img: "dal baati.jpg",
            videos: [
                "https://www.youtube.com/embed/m8sd24ov__E?si=be9zwVXpzklKqLnc" ,
                "https://www.youtube.com/embed/ZNLiCwGfp0Y?si=CVA62T2E_3S3WGmG" 
            ],
            ingredients: [
                "1 cup whole wheat flour (atta)",
                "1/2 cup ghee (clarified butter)",
                "1 cup cooked dal (lentil curry)",
                "Spices: turmeric, cumin, coriander, red chili powder"
            ]
        },
        {
            name: "Puri Sabji",
            img: "puri sabji.jpg",
            videos: [
                "https://www.youtube.com/embed/I7SxvS93gbo?si=Z2SNq4Dzjq5zdo9B",
                "https://www.youtube.com/embed/0ujf6h36NXU?si=qxAbX_LtZfoON4UV" 
            ],
            ingredients: [
                "2 cups whole wheat flour (atta)",
                "1 cup mixed vegetables",
                "Spices: turmeric, cumin, coriander, red chili powder"
            ]
        }
    ],
    italian: [
        {
            name: "Pizza",
            img: "pizza.jpg",
            videos: [
                "https://www.youtube.com/embed/FGT5MnXSKrc?si=Dqt3548VyFX8mZX_",
                "https://www.youtube.com/embed/zAICu_dIlUs?si=RlSFnF6BR_bPvYt9" 
            ],
            ingredients: [
                "1 pizza dough",
                "1 cup pizza sauce",
                "1 cup mozzarella cheese, shredded",
                "Pepperoni, mushrooms, bell peppers (optional)"
            ]
        },
        {
            name: "Pasta",
            img: "pasta.jpg",
            videos: [
                "https://www.youtube.com/embed/UxQJuCIWSQg?si=5u9zDReHGzUxXMYC",
                "https://www.youtube.com/embed/VpGXMauVEb4?si=rN_t8t9DeVH0abZm" 
            ],
            ingredients: [
                "2 cups pasta",
                "1 cup pasta sauce",
                "1/2 cup parmesan cheese",
                "Herbs: basil, oregano"
            ]
        },
        {
            name: "Risotto",
            img: "risoto.jpg",
            videos: [
                "https://www.youtube.com/embed/HHCGDJhsTyY?si=g-ZU043PeDhnUiFy",
                "https://www.youtube.com/embed/j_R-UbqW22U?si=guGUNJAByf3uT5xX" 
            ],
            ingredients: [
                "1 cup Arborio rice",
                "1/2 cup white wine",
                "1/2 cup parmesan cheese",
                "Vegetable or chicken broth"
            ]
        },
        {
            name: "Pesto Pasta",
            img: "pisto pasta.jpg",
            videos: [
                "https://www.youtube.com/embed/a4MoUsbLxMg?si=eB2IyTkpTFq26Dkc" ,
                "https://www.youtube.com/embed/VYBA-M361gI?si=kZAaIvYpzaZaGbQZ" 
            ],
            ingredients: [
                "2 cups pasta",
                "1 cup basil pesto sauce",
                "1/2 cup pine nuts",
                "Parmesan cheese (optional)"
            ]
        },
        {
            name: "Margherita Pizza",
            img: "margherita pizza.jpg",
            videos: [
                "https://www.youtube.com/embed/Wc2OJpAx_WM?si=RWJD8Y5Xn9fQzuOL",
                "https://www.youtube.com/embed/PYKy24Cml5M?si=D3PD1hxdltFQAx1I" 
            ],
            ingredients: [
                "1 pizza dough",
                "1 cup pizza sauce",
                "1 cup mozzarella cheese, shredded",
                "Fresh basil leaves"
            ]
        }
    ],
    chinese: [
        {
            name: "Chilli Paneer",
            img: "chilli paneer.jpg",
            videos: [
                "https://www.youtube.com/embed/NeBpZLTO1ts?si=HrVVP7EHbFBOjazD",
                "https://www.youtube.com/embed/vgdlcJkU5dk?si=k5ws50bGHWW4taPB" 
            ],
            ingredients: [
                "1 cup paneer cubes",
                "1 cup bell peppers",
                "Soy sauce, vinegar, chili sauce",
                "Cornstarch for coating"
            ]
        },
        {
            name: "Vegetable Dimsums (Momos)",
            img: "disum momos.jpg",
            videos: [
                "https://www.youtube.com/embed/recGZd1f5Yg?si=I5HO-ruBbTK7m0p4", 
                "https://www.youtube.com/embed/sDErRdnYXlY?si=7E-f-OkRR-4cRURs"
            ],
            ingredients: [
                "2 cups all-purpose flour",
                "1 cup mixed vegetables",
                "Soy sauce, ginger-garlic paste",
                "Sesame oil"
            ]
        },
        {
            name: "Vegetable Hot and Sour Soup",
            img: "hot soup.jpg",
            videos: [
                "https://www.youtube.com/embed/3n0q7TwbehA?si=Vx3_-4YdqoiFaAjm",
                "https://www.youtube.com/embed/Ytba2xojopE?si=2zx4X6cKz_0cg_cD" 
            ],
            ingredients: [
                "4 cups vegetable broth",
                "1 cup mixed vegetables",
                "Soy sauce, vinegar, chili sauce",
                "Cornstarch for thickening"
            ]
        },
        {
            name: "Vegetable Fried Rice",
            img: "veg rice.jpg",
            videos: [
                "https://www.youtube.com/embed/efqUsQFY6wU?si=2ZT_ff-sO43jRwgU", 
                "https://www.youtube.com/embed/h1EztCFZsg0?si=tsFnbRJs3jhoj-HP" 
            ],
            ingredients: [
                "2 cups cooked rice",
                "1 cup mixed vegetables",
                "Soy sauce, vinegar",
                "Eggs (optional)"
            ]
        },
        {
            name: "Hakka Noodles",
            img: "hakka noodle.jpg",
            videos: [
                "https://www.youtube.com/embed/bdNuZfnDLRs?si=Oq8DAIgIZtUUnruh",
                "https://www.youtube.com/embed/7FRFihcDllk?si=YCSvFWpbyx8H93ZS" 
            ],
            ingredients: [
                "2 cups boiled noodles",
                "1 cup mixed vegetables",
                "Soy sauce, vinegar",
                "Chili paste"
            ]
        }
    ],
    desserts: [
        {
            name: "Gulab Jamun",
            img: "gulb jamun.jpg",
            videos: [
                "https://www.youtube.com/embed/Do9mk9mya_A?si=XdiGEHb5nuuiyls6",
                "https://www.youtube.com/embed/4tVIXMlcRAg?si=5a2W-ZRz2cg2wVte" 
            ],
            ingredients: [
                "1 cup milk powder",
                "1/2 cup all-purpose flour",
                "Sugar syrup, rose water",
                "Cardamom powder"
            ]
        },
        {
            name: "Jalebi",
            img: "jalebi.jpg",
            videos: [
                "https://www.youtube.com/embed/0w471_wMPP0?si=qrFmN2cGYTI42LAv",
                "https://www.youtube.com/embed/pdFm9Rnz4H8?si=7ARG7fMfPQTMgK6y" 
            ],
            ingredients: [
                "1 cup all-purpose flour",
                "1/2 cup yogurt",
                "Sugar syrup",
                "Saffron strands"
            ]
        },
        {
            name: "Ladoo",
            img: "laddo.jpg",
            videos: [
                "https://www.youtube.com/embed/YKQ_9-UUMqM?si=rgBTIxj_I_p52y7Q",
                "https://www.youtube.com/embed/B88nKOlldYo?si=z6kGxtlXKrAAixIw"
            ],
            ingredients: [
                "1 cup besan (gram flour)",
                "1/2 cup ghee",
                "Sugar, cardamom powder",
                "Almonds for garnish"
            ]
        },
        {
            name: "Rasgulla",
            img: "rasgulla.jpg",
            videos: [
                "https://www.youtube.com/embed/wCuiuzmesk8?si=dluyWWXtzzknTuv4",
                "https://www.youtube.com/embed/CJdUg67xMFA?si=SOMtvPtI9rrape_P" 
            ],
            ingredients: [
                "1 cup paneer (cottage cheese)",
                "2 cups sugar",
                "Water, cardamom",
                "Rose water"
            ]
        },
        {
            name: "Rasmalai",
            img: "rasmlai.jpg",
            videos: [
                "https://www.youtube.com/embed/oZy3nlTZmco?si=VKWAHOv-G6LtUDmC",
                "https://www.youtube.com/embed/88OoCeSmkGU?si=yipcSyOqyk-82iww" 
            ],
            ingredients: [
                "1 cup milk",
                "1 cup paneer (cottage cheese)",
                "Sugar, saffron, cardamom",
                "Pistachios for garnish"
            ]
        },
        {
            name: "Peda",
            img: "pedda.jpg",
            videos: [
                "https://www.youtube.com/embed/JFx5-wNkAnc?si=xbkVZzQNc7zvvtdl",
                "https://www.youtube.com/embed/QDUdY_HKRsU?si=taT7AxPUiugEa2Yp" 
            ],
            ingredients: [
                "1 cup khoya (milk solids)",
                "1/2 cup sugar",
                "Cardamom powder",
                "Saffron strands for garnish"
            ]
        }
    ]
};

document.querySelectorAll('.cuisine').forEach(cuisine => {
    cuisine.addEventListener('click', () => {
        const selectedCuisine = cuisine.id;
        const dishesSection = document.querySelector('.dishes');
        const dishList = document.getElementById('dish-list');

        dishList.innerHTML = ''; // Clear previous dishes

        cuisines[selectedCuisine].forEach(dish => {
            const dishDiv = document.createElement('div');
            dishDiv.classList.add('dish');
            dishDiv.innerHTML = `
                <img src="${dish.img}" alt="${dish.name}">
                <h3>${dish.name}</h3>
            `;
            dishDiv.addEventListener('click', () => {
                showRecipe(dish);
            });
            dishList.appendChild(dishDiv);
        });

        document.querySelector('.cuisines').classList.add('hidden');
        dishesSection.classList.remove('hidden');
    });
});

function showRecipe(dish) {
    const recipeSection = document.getElementById('recipe-section');
    const recipeDetails = document.getElementById('recipe-details');

    recipeDetails.innerHTML = `
        <div class="videos">
            ${dish.videos.map(video => `<div class="video"><iframe width="560" height="315" src="${video}" frameborder="0" allowfullscreen></iframe></div>`).join('')}
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${dish.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
    `;

    document.querySelector('.dishes').classList.add('hidden');
    recipeSection.classList.remove('hidden');
}
