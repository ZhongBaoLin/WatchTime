        /* --- 1. REAL DATA: 30 ITEMS (10 Classic, 10 Sport, 10 Smart) --- */
        // Додано поле 'brand' до кожного товару
        const products = [
            // --- CLASSIC (10 Items) ---
            {
                id: 1, name: "Tissot Le Locle Powermatic 80", category: "Класика", brand: "Tissot", price: 24500, discount: 0,
                image: "https://tissot.ua/media/catalog/product/T/0/T006.407.16.053.00.webp",
                description: "Еталон швейцарської елегантності. Механізм з автопідзаводом та запасом ходу до 80 годин.",
                specs: ["Механізм: Powermatic 80", "Скло: Сапфір", "Корпус: Сталь 316L"]
            },
            {
                id: 2, name: "Seiko Presage Cocktail Time", category: "Класика", brand: "Seiko", price: 16800, discount: 10, oldPrice: 18500,
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhGnA0AjeAuqd9neTF1IyHTl9x-NsMJJXy1WhzCUHQpBiUr2XaXjNteHlq0cwMxoea62slo8BMQWb7QWOMY-QmLPFB2KRIEyIWFAbTKfsfxmQ6IUOmso3BUg",
                description: "Вишуканий циферблат з ефектом сонячних променів, натхненний гламуром коктейль-барів.",
                specs: ["Калібр: 4R35", "Водозахист: 50м", "Ремінець: Шкіра"]
            },
            {
                id: 3, name: "Rolex Datejust Style Gold", category: "Класика", brand: "Rolex", price: 45000, discount: 0,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRw79GmYO1oPV1Aq_afxyXDkIMx0g_3Of5BTEbsjntyykfPT5OsU8WdjHUhP4OZVpJaw8shLVGbILDMj_XmnFalEnvDJeb05hhclrap-kdslJWWv6z1l-5y4A",
                description: "Преміальний дизайн у золотому виконанні. Символ статусу та бездоганного смаку.",
                specs: ["Покриття: PVD Gold", "Механізм: Swiss Quartz", "Інкрустація: Кристали"]
            },
            {
                id: 4, name: "Orient Bambino V2", category: "Класика", brand: "Orient", price: 9200, discount: 15, oldPrice: 10800,
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRncbYHEO1pyv5c06n_8OQvp9a0FgvkhyGq8Y8hLcHDtw57PpfeQiVrWBjQzfq5NmjfUXhKi5bfklPZi9B4lWg61hJd01Q6lN_wPrOz3vdD-J8ZhD_SbpEyaA",
                description: "Вінтажна класика за доступною ціною. Купольне скло та римські цифри.",
                specs: ["Механізм: Автомат", "Скло: Мінеральне", "Стиль: Ретро"]
            },
            {
                id: 5, name: "Longines Master Collection", category: "Класика", brand: "Longines", price: 85000, discount: 0,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4-ZBqUlpuD6TGTxPYEXRYNGc0-oR7psshzbQOyqUI9cEjpzAGswflX62pjhdjkekW5jRyci-4AWRwE5L0Lq3K6qLQMEdcxhZ_-0o_hRyZW7evjWwvP7kDTg",
                description: "Традиційне годинникове мистецтво. Сині стрілки на фактурному циферблаті.",
                specs: ["Калібр: L888", "Скло: Сапфір з антибліком", "Задня кришка: Прозора"]
            },
            {
                id: 6, name: "Cartier Tank Must", category: "Класика", brand: "Cartier", price: 120000, discount: 0,
                image: "https://itstime.com.ua/wp-content/uploads/2025/06/cartier-tank-must-de-cartier-watch-large-model-ref.wsta0106-main-face-e1751299149575-531x677.png",
                description: "Легендарна прямокутна форма, що залишається актуальною понад століття.",
                specs: ["Тип: Кварц", "Ремінець: Шкіра алігатора", "Корона: Кабошон"]
            },
            {
                id: 7, name: "IWC Portugieser Chronograph", category: "Класика", brand: "IWC", price: 250000, discount: 0,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTl5zRzLuLuXOZ-VT1eyHdMu48MEir3oeQm7URnXJa120ddZbaPWP0lcNnT8PCiY0GlNkcz__gEQ5MzIFn0gy-VOX2PR6SjWPNjtQgpZCNfFLYiRNzCsreskA",
                description: "Шедевр точності та дизайну. Ідеальні пропорції та читабельність.",
                specs: ["Функції: Хронограф", "Запас ходу: 46 годин", "Діаметр: 41мм"]
            },
            {
                id: 8, name: "Hamilton Khaki Field", category: "Класика", brand: "Hamilton", price: 28000, discount: 0,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnG2RdNkFBBCDWpiq1LXAnuztIzT05aQQ3SsQx0tr-toB72YpqUJquMaLl-iZQCHgy1xaheOAP7iZA3vclZoNNK4clwIloFFMipLMPiI2Sgpf5i5DVOefmFg",
                description: "Годинник у стилі мілітарі, який чудово пасує до повсякденного одягу.",
                specs: ["Механізм: H-10", "Запас ходу: 80г", "Ремінець: NATO"]
            },
            {
                id: 9, name: "Frederique Constant Slimline", category: "Класика", brand: "Frederique Constant", price: 32000, discount: 20, oldPrice: 40000,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-91zCBpvj7Znvhy_ZQQp5AeTHY2kxpaStgI8sLq93nrX79uBBuW-ZLoOMZBbfaU_XlMvPCRgJwu9YYY9uLEskX4VQQEqhVs_bfeOuqcqOC9jcrtR6bgj1Ig",
                description: "Ультратонкий корпус для максимального комфорту під манжетом сорочки.",
                specs: ["Товщина: 5мм", "Механізм: Кварц", "Скло: Сапфір"]
            },
            {
                id: 10, name: "Omega De Ville Prestige", category: "Класика", brand: "Omega", price: 145000, discount: 0,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSE1tycPJxQtqIoEqbTOLEHWYWwaL0VUgqIeRE0k2K7vd40nReMcrrtgIP9ZHc8Ndo0r15EY2Og-GmTZ4lzwi4OeVa2aqnb",
                description: "Класичний дизайн та передові технології коаксіального механізму Omega.",
                specs: ["Сертифікація: Chronometer", "Діаметр: 39.5мм", "Гарантія: 5 років"]
            },

            // --- SPORT (10 Items) ---
            {
                id: 11, name: "Casio G-Shock Mudmaster", category: "Спорт", brand: "Casio", price: 14500, discount: 10, oldPrice: 16100,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPpCyMmdsjl3Y72olCdoFn6qyFYZFlsZuvGcsJDeNyW9-a_QFg_0k8ztpNmpmkmQII2vW3O14r3aFbKAJafrlA91ZxEJrpaWPud2md7bfYWcDbxveI4pTp",
                description: "Створений для найсуворіших умов. Захист від бруду, вібрації та ударів.",
                specs: ["Захист: Mud Resist", "Сенсори: Компас, Термометр", "Вода: 200м"]
            },
            {
                id: 12, name: "Citizen Promaster Diver", category: "Спорт", brand: "Citizen", price: 11800, discount: 0,
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR29ZaZ6l4LkRflI2vVEwQcsdt4sC2a0UV6psYsmGcJk-qZrt55QGqqrr_cSRU__7RswbboAJcLy2npK_ZRa_nNd0udaVgljKbOJygMyfxG3BVSUJJ1AZ4jXw",
                description: "Професійний дайверський годинник з технологією Eco-Drive (зарядка від світла).",
                specs: ["Сертифікація: ISO 6425", "Живлення: Сонце", "Безель: Обертовий"]
            },
            {
                id: 13, name: "Tag Heuer Carrera", category: "Спорт", brand: "Tag Heuer", price: 115000, discount: 0,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgR3clyDSWDe3O_lW-t2o7W-anGf4JKciDyUn2Yj2DNxjOA7yLRZI6XylUxlBP2NCWeoKNLs3-P-pRd091uZAFezLYTz5scSwzEHnlePERohhAtgA6Rju9CA",
                description: "Легендарний хронограф, народжений на гоночних трасах.",
                specs: ["Функції: Тахіметр", "Скло: Сапфір", "Браслет: Сталь"]
            },
            {
                id: 14, name: "Luminox Navy SEAL", category: "Спорт", brand: "Luminox", price: 18500, discount: 0,
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuhKc906A3KCoGHnXy79yUKz9sjkuj2TETECyM7j7US-8shfQYOFJ4MXw-PEgCQksEu2yHtEs-R6JajtB7p-ozQXhS_w-ZiSvc0OOeOmoP0TOLz9sgmyYfjmg",
                description: "Офіційний годинник морських котиків США. Тритієва підсвітка, що світить 25 років.",
                specs: ["Підсвітка: Tritium", "Матеріал: Carbonox", "Вода: 200м"]
            },
            {
                id: 15, name: "Breitling Navitimer", category: "Спорт", brand: "Breitling", price: 320000, discount: 0,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlW8-dU_prRXIGbGTst6MhlrGH5iY-6iqSh31dmbpRqq8kGy8RGTSpTP7Fkz3YunELNzA5P9LUnBYOSd4amvBjmV9tc-CZANCG7yRM_l4yZn99ddSUsXJAWw",
                description: "Культовий годинник пілотів з логарифмічною лінійкою на безелі.",
                specs: ["Механізм: B01", "Запас ходу: 70г", "Функції: Авіаційний хронограф"]
            },
            {
                id: 16, name: "Tudor Black Bay", category: "Спорт", brand: "Tudor", price: 160000, discount: 0,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlan9t9fxDxsk_ACcR7iOnUYq13R0VcUFLj3vxV7233UzXpNapl93mqQklsR6FPVeOull9C5XSa_2Z0rY5Ft3VSDUANiWXM3n7Vds4fmTjrdmKkdewyN2sVg",
                description: "Сучасне переосмислення класичних дайверських годинників 50-х років.",
                specs: ["Водозахист: 200м", "Сертифікація: COSC", "Стрілки: Snowflake"]
            },
            {
                id: 17, name: "Victorinox I.N.O.X.", category: "Спорт", brand: "Victorinox", price: 26000, discount: 15, oldPrice: 30500,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaKJDKivO3nYJByy9Liuu8-8bp51CzamHzwxBV84CNg3iDsjaO0G4pub5Z-COkVn0z7TxSRCuYfm5Kly1PVsuLi--MCxsvcN_lMCdngkSn9Urp8VQpI6WxGAo",
                description: "Витримує падіння з 10 метрів та переїзд танком. Швейцарська надійність.",
                specs: ["Тести: 130 перевірок", "Корпус: Сталь", "Скло: Потрійний антиблік"]
            },
            {
                id: 18, name: "Seiko 5 Sports GMT", category: "Спорт", brand: "Seiko", price: 19500, discount: 0,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlQGL3LXUPBxxKyJb87Y0J3nojL04m-Qg5xGQ5irGgFKRXbgxCVlW9zeo-9XokmKphku9CyWflezmdzxfNE1lEyjVscUim83OUwb2RtvnsrEJ5OoIh0GCb",
                description: "Ідеальний супутник для подорожей з функцією відображення другого часового поясу.",
                specs: ["Функція: GMT", "Механізм: Автомат", "Безель: Двоколірний"]
            },
            {
                id: 19, name: "Panerai Luminor Marina", category: "Спорт", brand: "Panerai", price: 210000, discount: 0,
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6SGIJJKAxvaEmXVVGsU8oHllcuWhXvowcoxJEc5g7r881epYH0RU5sOsr-MGuRwa_1ZSywLPuWZg95bM-fg_QQa-7BYF_Q8usV1xPBeiyv2mYlwIS41Hy",
                description: "Впізнаваний італійський дизайн з захисною скобою заводної головки.",
                specs: ["Циферблат: Сендвіч", "Запас ходу: 3 дні", "Ремінець: Каучук"]
            },
            {
                id: 20, name: "Casio Edifice Chrono", category: "Спорт", brand: "Casio", price: 6500, discount: 20, oldPrice: 8100,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdLMbbi3WfcburkGkdgib6YNBX5DdL9pySoACJoyWEuucmzTSKIUE8INDv_KwMm3LS2scVCfyJgWqcYgNmG6sP-gVFnCz3PAouvsnfnx-UvZgb1fdszgBq",
                description: "Динамічний дизайн, натхненний автоспортом. Bluetooth синхронізація.",
                specs: ["Зв'язок: Smartphone Link", "Живлення: Solar", "Функції: Світовий час"]
            },

            // --- SMART (10 Items) ---
            {
                id: 21, name: "Apple Watch Series 9", category: "Смарт", brand: "Apple", price: 18999, discount: 5, oldPrice: 19999,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdQJEZ1pIQ7cXAxxVT1lb7uTTkuKQdsbc0GfQcbSFmBz_exWReWxPIZrretfHaBgD21uDS5uFFs1dYIBUyEgmkaVtqx_2h5MR0Dpwc5dmVXc8KiFLb66r7xA",
                description: "Найпотужніший годинник Apple. Управління жестом Double Tap.",
                specs: ["Чіп: S9 SiP", "Екран: 2000 ніт", "Датчики: Кисень, ЕКГ"]
            },
            {
                id: 22, name: "Samsung Galaxy Watch 6", category: "Смарт", brand: "Samsung", price: 11500, discount: 0,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4P7eFnLTtUEOWeIsEnY1x5jXVWtvLLCmmZ5xBfZVXRqo4uNBnurhmCqbWPUFa623OuWDIXylbY_yrlFHxminc8-TC45Dx",
                description: "Покращений моніторинг сну та тонші рамки екрану. Ідеально для Android.",
                specs: ["ОС: Wear OS", "Дисплей: Super AMOLED", "Скло: Сапфір"]
            },
            {
                id: 23, name: "Garmin Fenix 7X Solar", category: "Смарт", brand: "Garmin", price: 38000, discount: 0,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRPMsifLlLYKN7_duDbU-e8nz6SgOLiubIM4FdtgBXfuh0OZx8aTXmGFyN29kfGUb3kh7CTZeiLy_fcp0arotnhKLTgsToi1O37ApFZZfPB1sIkUBh6aW0Vcw",
                description: "Мультиспортивний монстр з сонячною батареєю та ліхтариком.",
                specs: ["GPS: Multiband", "Автономність: до 28 днів", "Карти: Топографічні"]
            },
            {
                id: 24, name: "Apple Watch Ultra 2", category: "Смарт", brand: "Apple", price: 39999, discount: 0,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRocDbqsU-MrFKXkmFzsEZep4AIEmj76B3SQac-vimdkvuV2EMaEKz0J6bSz8_aVNKFbYhMGREgcHnLdUtq5mbWY5tWIjQS",
                description: "Титановий корпус та неймовірна яскравість для екстремальних пригод.",
                specs: ["Корпус: Титан", "Екран: 3000 ніт", "Вода: 100м (дайвінг)"]
            },
            {
                id: 25, name: "Xiaomi Smart Band 8", category: "Смарт", brand: "Xiaomi", price: 1699, discount: 10, oldPrice: 1899,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSoF3ILEK0WmdXorgZgko7rNPRwKI7IzO8NIVtS4-Xe3JQxzLMo4wfpD1FaCMj0mxF8PepsTekQZ06cT4UVb65439fRxLhzXJGrTsC3ja9USlscX-kZip0rYQ",
                description: "Стильний фітнес-трекер з можливістю носіння на шиї або кросівках.",
                specs: ["Дисплей: 60Hz AMOLED", "Зарядка: 1 година", "Режими: 150+"]
            },
            {
                id: 26, name: "Amazfit GTR 4", category: "Смарт", brand: "Amazfit", price: 7500, discount: 0,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTL3d3T_IjroOhiRFApiIifbu2wQVWM3UJevpxvnt-bDM53iY44v2tSXQiNqnOtJPXGnATEZxJAfRhOUiS4mw6Tqwy_ZG9gCl5R-4AuotZboiTgYlvcQ9D6Dg",
                description: "Класичний дизайн розумного годинника з двосмуговим GPS.",
                specs: ["Автономність: 14 днів", "Дзвінки: Bluetooth", "ОС: Zepp OS"]
            },
            {
                id: 27, name: "Google Pixel Watch 2", category: "Смарт", brand: "Google", price: 14500, discount: 0,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzBsHht_kKVELQRxA3hJDsZKkWQp8SCoWstpQqSRdXC41GiiDayiCZMPTCmF_O7JsruxEffKYLL0CM23cZefSKNXXrV5zWu0IyZpoxuPRwo1d7HcKI_2_C894",
                description: "Найрозумніший годинник від Google з інтеграцією Fitbit.",
                specs: ["Датчики: C-EDA (стрес)", "Корпус: Алюміній", "Асистент: Google"]
            },
            {
                id: 28, name: "Suunto 9 Peak Pro", category: "Смарт", brand: "Suunto", price: 19000, discount: 15, oldPrice: 22300,
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR271WvA0fFq6KR1CdgQ7GJVMtnuCqygdkaCpI9E5IcBeY7mbCvs7noAkIfTodEHiJQjv9Y4RL46SEJzphFqA_kMmTzWHXwvMNxTZbjsG86is6AwaYvDCoFiS0",
                description: "Найтонший та найміцніший годинник Suunto. Виготовлено у Фінляндії.",
                specs: ["Зарядка: Швидка", "GPS: 40 годин", "Екологія: Carbon neutral"]
            },
            {
                id: 29, name: "Fitbit Charge 6", category: "Смарт", brand: "Fitbit", price: 6800, discount: 0,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTq4VVzmcgeiM-9wHG_zD5m4-c0cJxsf-JuQPMt-OUriohY9PrLXZUYfpe4ldPc21abU_lkO244GWuWv1zKva3x0RqEQsp31K14MbD1kH3tpXaDD-YSZ4HsrYw",
                description: "Передовий фітнес-трекер з Google Maps та YouTube Music.",
                specs: ["ЕКГ: Так", "Оплата: Google Wallet", "Пульс: Точний 24/7"]
            },
            {
                id: 30, name: "Huawei Watch GT 4", category: "Смарт", brand: "Huawei", price: 9999, discount: 0,
                image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpm_ruVtBvhBmb70LARqO7nPDMn-jKEbCjIqsdkXqvTTjWBj5rdWKUhr0EW0mKIPGWA9OxhcNJU8U-SYPnZuytJMHvsPsk6kdOikgpNSeKl5zn0lWCldos",
                description: "Геометрична естетика та потужний моніторинг здоров'я.",
                specs: ["Дисплей: 1.43 AMOLED", "Калорії: Stay Fit", "Сумісність: iOS/Android"]
            }
        ];

        const categories = ['Класика', 'Спорт', 'Смарт'];

        // 2. STATE MANAGEMENT
        let state = {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            filterCategory: 'all',
            filterBrand: 'all', // New Brand Filter State
            sortBy: 'default'
        };

        // 3. FUNCTIONS
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(state.cart));
            updateCartCount();
        }
        function updateCartCount() {
            const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
            const el = document.getElementById('cart-count');
            if(el) el.innerText = count;
        }
        function addToCart(id) {
            const product = products.find(p => p.id === id);
            const existing = state.cart.find(item => item.id === id);
            if (existing) existing.qty++;
            else state.cart.push({ ...product, qty: 1 });
            saveCart();
            
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = "✓ Додано";
            btn.style.background = "#2ecc71";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
            }, 1000);
        }
        function removeFromCart(id) {
            state.cart = state.cart.filter(item => item.id !== id);
            saveCart();
            router('cart');
        }

        // 4. ROUTER
        const app = document.getElementById('app');

        function router(route, param = null) {
            window.scrollTo(0, 0);
            app.innerHTML = '';
            
            switch(route) {
                case 'home': renderHome(); break;
                case 'catalog': renderCatalog(); break;
                case 'product': renderProductPage(param); break;
                case 'cart': renderCartPage(); break;
                case 'checkout': renderCheckoutPage(); break;
                case 'about': renderAbout(); break;
                case 'delivery': renderDelivery(); break; // <--- ДОДАЙТЕ ЦЕЙ РЯДОК
                default: renderHome();
            }
        }

        // 5. RENDERERS
        function renderHome() {
            const popular = products.filter(p => p.discount).slice(0, 4).map(p => createProductCard(p)).join('');
            
            app.innerHTML = `
                <section class="hero">
                    <div class="container hero-content">
                        <div>
                            <h1>Час твоєї елегантності</h1>
                            <p>Нова колекція 2025 вже в продажу</p>
                            <button onclick="router('catalog')" class="btn">Перейти в каталог</button>
                        </div>
                    </div>
                </section>
                
                <div class="container">
                    <div class="section-title">Акційні пропозиції</div>
                    <div class="products-grid">
                        ${popular}
                    </div>

                    <div class="section-title">Чому обирають нас</div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
                        <div style="background: #fff; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                            <div style="font-size: 3rem; margin-bottom: 15px;">🛡️</div>
                            <h3>Офіційна гарантія</h3>
                            <p>Ми надаємо 2 роки гарантії на всі механізми.</p>
                        </div>
                        <div style="background: #fff; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                            <div style="font-size: 3rem; margin-bottom: 15px;">🚚</div>
                            <h3>Швидка доставка</h3>
                            <p>Безкоштовна доставка Новою Поштою при замовленні від 5000 грн.</p>
                        </div>
                        <div style="background: #fff; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                            <div style="font-size: 3rem; margin-bottom: 15px;">⭐</div>
                            <h3>Оригінальність</h3>
                            <p>Тільки сертифіковані товари від виробників.</p>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderCatalog() {
            // Вираховуємо унікальні бренди динамічно з товарів
            const uniqueBrands = [...new Set(products.map(p => p.brand))].sort();

            app.innerHTML = `
                <div class="container">
                    <div class="section-title">Каталог годинників</div>
                    <div class="catalog-layout">
                        <aside class="sidebar">
                            <div class="filter-group">
                                <h4>Категорія</h4>
                                <label class="filter-item"><input type="radio" name="cat" value="all" ${state.filterCategory === 'all' ? 'checked' : ''} onchange="applyFilter(this.value)"> Всі</label>
                                ${categories.map(c => `<label class="filter-item"><input type="radio" name="cat" value="${c}" ${state.filterCategory === c ? 'checked' : ''} onchange="applyFilter(this.value)"> ${c}</label>`).join('')}
                            </div>
                            
                            <div class="filter-group">
                                <h4>Бренд</h4>
                                <select onchange="applyBrandFilter(this.value)" class="filter-select">
                                    <option value="all">Всі бренди</option>
                                    ${uniqueBrands.map(b => `<option value="${b}" ${state.filterBrand === b ? 'selected' : ''}>${b}</option>`).join('')}
                                </select>
                            </div>

                            <div class="filter-group">
                                <h4>Сортування</h4>
                                <select onchange="applySort(this.value)" class="filter-select">
                                    <option value="default" ${state.sortBy === 'default' ? 'selected' : ''}>Рекомендовані</option>
                                    <option value="price-asc" ${state.sortBy === 'price-asc' ? 'selected' : ''}>Від дешевих</option>
                                    <option value="price-desc" ${state.sortBy === 'price-desc' ? 'selected' : ''}>Від дорогих</option>
                                </select>
                            </div>
                        </aside>
                        <div id="catalog-grid" class="products-grid">
                            </div>
                    </div>
                </div>
            `;
            renderCatalogItems();
        }

        function renderCatalogItems() {
            let filtered = products;
            
            // Category Filter
            if (state.filterCategory !== 'all') {
                filtered = filtered.filter(p => p.category === state.filterCategory);
            }

            // Brand Filter
            if (state.filterBrand !== 'all') {
                filtered = filtered.filter(p => p.brand === state.filterBrand);
            }

            // Sorting
            if (state.sortBy === 'price-asc') {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            } else if (state.sortBy === 'price-desc') {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            }

            const grid = document.getElementById('catalog-grid');
            if (filtered.length === 0) {
                grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;">На жаль, товарів за такими критеріями не знайдено</div>';
            } else {
                grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
            }
        }

        function createProductCard(p) {
            const ribbon = p.discount ? `<div class="discount-ribbon">-${p.discount}%</div>` : '';
            const oldPrice = p.oldPrice ? `<span class="p-old-price">${p.oldPrice.toLocaleString()} ₴</span>` : '';
            
            return `
                <div class="product-card">
                    ${ribbon}
                    <div class="p-img" onclick="router('product', ${p.id})">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <div class="p-info">
                        <div class="p-cat">${p.category} • ${p.brand}</div>
                        <div class="p-title">${p.name}</div>
                        <div class="p-price-wrap">
                            <div class="p-price">${p.price.toLocaleString()} ₴</div>
                            ${oldPrice}
                        </div>
                        <div class="p-actions">
                            <button onclick="router('product', ${p.id})" class="btn btn-sm btn-outline">Огляд</button>
                            <button onclick="addToCart(${p.id})" class="btn btn-sm">Купити</button>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderProductPage(id) {
            const p = products.find(item => item.id === id);
            if (!p) return;
            
            const oldPrice = p.oldPrice ? `<span style="text-decoration: line-through; color: #888; font-size: 1.5rem; font-weight: 400;">${p.oldPrice.toLocaleString()} ₴</span>` : '';

            app.innerHTML = `
                <div class="container">
                    <button onclick="router('catalog')" class="btn btn-outline" style="margin: 20px 0;">← Назад</button>
                    <div class="product-detail">
                        <div class="pd-gallery">
                            <div class="gallery-main">
                                <img src="${p.image}" alt="${p.name}">
                            </div>
                        </div>
                        <div class="pd-info">
                            <div class="p-cat">${p.category} • ${p.brand}</div>
                            <h2>${p.name}</h2>
                            <div class="pd-price-block">
                                ${p.price.toLocaleString()} ₴
                                ${oldPrice}
                            </div>
                            <p class="pd-desc">${p.description}</p>
                            
                            <h4 style="margin-bottom: 15px;">Характеристики:</h4>
                            <ul class="specs-list">
                                ${p.specs.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                            
                            <div style="margin-top: 40px; display: flex; gap: 20px;">
                                <button onclick="addToCart(${p.id})" class="btn" style="flex: 1; padding: 18px;">Додати в кошик</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderCartPage() {
            if (state.cart.length === 0) {
                app.innerHTML = `<div class="container" style="text-align:center; padding: 100px 0;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">🛒</div>
                    <h2>Ваш кошик порожній</h2>
                    <p style="color: #888; margin-bottom: 30px;">Але це ніколи не пізно виправити :)</p>
                    <button onclick="router('catalog')" class="btn">Перейти до каталогу</button>
                </div>`;
                return;
            }

            const rows = state.cart.map(item => `
                <tr>
                    <td style="width: 100px;"><img src="${item.image}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;"></td>
                    <td>
                        <div style="font-weight: bold; font-size: 1.1rem;">${item.name}</div>
                        <div style="font-size: 0.9rem; color: #888;">${item.category}</div>
                    </td>
                    <td>${item.price.toLocaleString()} ₴</td>
                    <td>
                         <span style="background: #f0f0f0; padding: 5px 12px; border-radius: 4px; font-weight: bold;">${item.qty}</span>
                    </td>
                    <td style="font-weight: bold;">${(item.price * item.qty).toLocaleString()} ₴</td>
                    <td style="text-align: right;">
                        <button onclick="removeFromCart(${item.id})" style="color: #e74c3c; font-size: 1.2rem; padding: 5px;">✕</button>
                    </td>
                </tr>
            `).join('');

            const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

            app.innerHTML = `
                <div class="container">
                    <div class="section-title">Кошик</div>
                    <table class="cart-table">
                        <thead>
                            <tr>
                                <th>Фото</th>
                                <th>Товар</th>
                                <th>Ціна</th>
                                <th>К-сть</th>
                                <th>Сума</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                    
                    <div style="display: flex; justify-content: flex-end; margin-top: 30px; align-items: center; gap: 30px;">
                        <div style="font-size: 1.5rem; font-weight: bold;">Всього: <span style="color: var(--accent);">${total.toLocaleString()} ₴</span></div>
                        <button onclick="router('checkout')" class="btn">Оформити замовлення</button>
                    </div>
                </div>
            `;
        }

        function renderCheckoutPage() {
            app.innerHTML = `
                <div class="container">
                    <div class="section-title">Оформлення замовлення</div>
                    <form class="checkout-form" onsubmit="processOrder(event)">
                        <div class="form-group">
                            <label>Прізвище та Ім'я</label>
                            <input type="text" id="name" placeholder="Іван Петренко" required>
                        </div>
                        <div class="form-group">
                            <label>Номер телефону</label>
                            <input type="tel" id="phone" placeholder="+38 (099) 000-00-00" required>
                        </div>
                        <div class="form-group">
                            <label>Місто та відділення Нової Пошти</label>
                            <textarea id="address" rows="3" placeholder="м. Київ, відділення №1..." required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Спосіб оплати</label>
                            <select>
                                <option>Накладений платіж</option>
                                <option>Оплата карткою на сайті</option>
                            </select>
                        </div>
                        <button type="submit" class="btn" style="width: 100%; margin-top: 10px; padding: 15px;">Підтвердити замовлення</button>
                    </form>
                </div>
            `;
        }

        function renderAbout() {
            // Для цієї сторінки ми використовуємо статичний контент,
            // але він виглядає професійно завдяки структурі.
            
            app.innerHTML = `
                <section class="about-hero">
                    <div class="container">
                        <h1>Наша Історія</h1>
                        <p>Більше ніж просто магазин. Ми — хранителі часу.</p>
                    </div>
                </section>

                <div class="container">
                    <div class="about-grid">
                        <div class="about-img">
                             
                            <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80" alt="Майстер годинникар">
                        </div>
                        <div class="about-text">
                            <h2>Від пристрасті до професіоналізму</h2>
                            <p>Історія <strong>WatchStore</strong> почалася у 2014 році з невеликої майстерні у центрі Києва. Нас об'єднала проста ідея: годинник — це не просто прилад для вимірювання часу, це відображення характеру людини, її амбіцій та стилю.</p>
                            <p>За 10 років ми виросли з локального ентузіаста до одного з найбільших дистриб'юторів оригінальних годинників в Україні. Ми особисто відвідуємо виставки у Женеві та Базелі, щоб привезти для вас найкращі моделі.</p>
                            <p>Ми не просто продаємо годинники, ми допомагаємо зберегти найцінніші моменти вашого життя.</p>
                        </div>
                    </div>
                </div>

                <div class="stats-bar">
                    <div class="container stats-grid">
                        <div class="stat-item">
                            <h3>10+</h3>
                            <p>Років на ринку</p>
                        </div>
                        <div class="stat-item">
                            <h3>30+</h3>
                            <p>Світових брендів</p>
                        </div>
                        <div class="stat-item">
                            <h3>50k+</h3>
                            <p>Щасливих клієнтів</p>
                        </div>
                        <div class="stat-item">
                            <h3>100%</h3>
                            <p>Оригінальна продукція</p>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="section-title">Наші Цінності</div>
                    <div class="values-grid" style="margin-bottom: 80px;">
                        <div class="value-card">
                            <div class="value-icon">💎</div>
                            <h4>Автентичність</h4>
                            <p>Ми гарантуємо 100% оригінальність кожного товару. Жодних реплік чи підробок. Тільки сертифікована продукція з офіційною гарантією.</p>
                        </div>
                        <div class="value-card">
                            <div class="value-icon">🤝</div>
                            <h4>Клієнтоорієнтованість</h4>
                            <p>Ми не залишаємо вас після покупки. Наш сервісний центр завжди готовий допомогти з налаштуванням або ремонтом вашого аксесуара.</p>
                        </div>
                        <div class="value-card">
                            <div class="value-icon">🚀</div>
                            <h4>Інновації</h4>
                            <p>Ми слідкуємо за трендами. Від класичної механіки до найсучасніших смарт-годинників — у нас є все, що пропонує індустрія.</p>
                        </div>
                    </div>

                    <div style="background: #f4f4f4; padding: 50px; border-radius: 12px; text-align: center; margin-bottom: 60px;">
                        <h2 style="margin-bottom: 20px;">Готові обрати свій ідеальний годинник?</h2>
                        <p style="margin-bottom: 30px; color: #666;">Перегляньте наш каталог, де зібрано понад 500 моделей на будь-який смак.</p>
                        <button onclick="router('catalog')" class="btn">Перейти до каталогу</button>
                    </div>
                </div>
            `;
        }

        function renderDelivery() {
            app.innerHTML = `
                <section class="delivery-hero">
                    <div class="container">
                        <h1>Доставка та Оплата</h1>
                        <p>Ми дбаємо про те, щоб ви отримали свій годинник швидко та зручно</p>
                    </div>
                </section>

                <div class="container">
                    
                    <div class="section-title">Способи доставки</div>
                    <div class="info-grid">
                        <div class="info-card">
                            <div class="info-icon">📦</div>
                            <div class="info-content">
                                <h3>Нова Пошта (Відділення)</h3>
                                <p>Доставка у будь-яке відділення Нової Пошти по всій Україні. Термін доставки 1-3 дні.</p>
                                <p><strong>Вартість:</strong> За тарифами перевізника (або безкоштовно від 5000 грн).</p>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">🚚</div>
                            <div class="info-content">
                                <h3>Кур'єрська доставка</h3>
                                <p>Адресна доставка кур'єром Нової Пошти прямо до ваших дверей. Зручно та безпечно.</p>
                                <p><strong>Вартість:</strong> +30 грн до тарифу доставки.</p>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">🏬</div>
                            <div class="info-content">
                                <h3>Самовивіз з магазину</h3>
                                <p>Ви можете забрати замовлення у нашому бутику в Києві за адресою вул. Хрещатик 24.</p>
                                <p><strong>Графік:</strong> Пн-Нд: 10:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    <div class="section-title">Способи оплати</div>
                    <div class="info-grid">
                        <div class="info-card">
                            <div class="info-icon">💳</div>
                            <div class="info-content">
                                <h3>Онлайн оплата</h3>
                                <p>Безпечна оплата карткою Visa/Mastercard через систему LiqPay або Apple/Google Pay без комісії.</p>
                                <div class="payment-methods">
                                    <span class="pm-badge">Visa</span>
                                    <span class="pm-badge">MasterCard</span>
                                    <span class="pm-badge">Apple Pay</span>
                                </div>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">💵</div>
                            <div class="info-content">
                                <h3>Оплата при отриманні</h3>
                                <p>Сплачуйте замовлення після огляду та примірки у відділенні пошти (накладений платіж).</p>
                                <p class="info-note">*Комісія Нової Пошти: 20 грн + 2% від суми.</p>
                            </div>
                        </div>

                         <div class="info-card">
                            <div class="info-icon">🏦</div>
                            <div class="info-content">
                                <h3>Оплата частинами</h3>
                                <p>Купуйте зараз, платіть потім. Доступна розстрочка від ПриватБанку та Монобанку до 6 платежів.</p>
                                <div class="payment-methods">
                                    <span class="pm-badge">PrivatBank</span>
                                    <span class="pm-badge">MonoBank</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: #f9f9f9; padding: 40px; border-radius: 12px; margin-bottom: 80px; border-left: 5px solid var(--accent);">
                        <h3 style="margin-bottom: 15px;">⚠️ Важлива інформація</h3>
                        <p style="margin-bottom: 10px;">При отриманні замовлення обов'язково перевіряйте цілісність упаковки та комплектацію товару у присутності кур'єра або співробітника служби доставки.</p>
                        <p>Усі годинники застраховані на повну вартість. У разі виявлення пошкоджень складіть акт у відділенні пошти та зв'яжіться з нами.</p>
                    </div>

                </div>
            `;
        }

        // 6. HELPERS
        function applyFilter(cat) { state.filterCategory = cat; renderCatalogItems(); }
        
        function applyBrandFilter(brand) { 
            state.filterBrand = brand; 
            renderCatalogItems(); 
        }
        
        function applySort(val) { state.sortBy = val; renderCatalogItems(); }
        
        function processOrder(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Дякуємо, ${name}! Ваше замовлення прийнято.`);
            state.cart = [];
            saveCart();
            router('home');
        }

        // Init
        updateCartCount();
        router('home');