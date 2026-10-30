var LANGS=['fr','en','ru','ro','it','es'],li=0,cur='Brunch',WA='33631166295';
/* order in every array: fr, en, ru, ro, it, es */
var UI={
nav_menu:['Menu','Menu','Меню','Meniu','Menu','Carta'],
nav_photos:['Photos','Photos','Фото','Fotografii','Foto','Fotos'],
nav_book:['Réserver','Book a table','Бронь','Rezervări','Prenota','Reservar'],
nav_find:['Nous trouver','Find us','Как нас найти','Unde ne găsiți','Dove siamo','Cómo llegar'],
hero_p:['Brunch, toasts signature, burgers et cocktails tropicaux. Venez avec de l’appétit, restez pour le dessert.','Brunch, signature toasts, burgers and tropical cocktails. Come hungry, stay for dessert.','Бранч, фирменные тосты, бургеры и тропические коктейли. Приходите голодными, оставайтесь на десерт.','Brunch, toasturi signature, burgeri și cocktailuri tropicale. Veniți flămânzi, rămâneți pentru desert.','Brunch, toast signature, hamburger e cocktail tropicali. Venite affamati, restate per il dolce.','Brunch, tostadas signature, hamburguesas y cócteles tropicales. Ven con hambre y quédate al postre.'],
cta:['Réserver une table','Book a table','Забронировать столик','Rezervă o masă','Prenota un tavolo','Reservar una mesa'],
hours:['Ouvert tous les jours de 08h40 à 17h00','Open every day, 8:40 am to 5:00 pm','Ежедневно с 08:40 до 17:00','Deschis zilnic, între 08:40 și 17:00','Aperti tutti i giorni dalle 08:40 alle 17:00','Abierto todos los días de 08:40 a 17:00'],
menu_h:['Notre carte','Our menu','Наше меню','Meniul nostru','Il nostro menù','Nuestra carta'],
menu_lead:['Brunch, toasts, burgers, desserts, boissons et cocktails. Prix en euros.','Brunch, toasts, burgers, desserts, drinks and cocktails. Prices in euros. Dish descriptions are in French; just ask us if you need help.','Бранч, тосты, бургеры, десерты, напитки и коктейли. Цены в евро. Описания блюд на французском, мы с радостью поможем.','Brunch, toasturi, burgeri, deserturi, băuturi și cocktailuri. Prețuri în euro. Descrierile preparatelor sunt în franceză; întrebați-ne dacă aveți nevoie de ajutor.','Brunch, toast, hamburger, dolci, bevande e cocktail. Prezzi in euro. Le descrizioni dei piatti sono in francese; chiedeteci pure aiuto.','Brunch, tostadas, hamburguesas, postres, bebidas y cócteles. Precios en euros. Las descripciones de los platos están en francés; pregúntanos si necesitas ayuda.'],
dl:['Télécharger la carte (PDF)','Download menu (PDF)','Скачать меню (PDF)','Descarcă meniul (PDF)','Scarica il menù (PDF)','Descargar la carta (PDF)'],
note:['Merci de nous signaler toute allergie lors de votre commande.','Please tell us about any allergies when you order.','Пожалуйста, сообщите нам об аллергиях при заказе.','Vă rugăm să ne spuneți despre orice alergie când comandați.','Segnalateci eventuali allergie al momento dell’ordine.','Avísanos de cualquier alergia al hacer tu pedido.'],
photos_h:['Chez Amazonica Brunch','Inside Amazonica Brunch','Внутри Amazonica Brunch','La Amazonica Brunch','Da Amazonica Brunch','En Amazonica Brunch'],
photos_lead:['Un aperçu de nos plats, de nos boissons et de notre espace.','A look at our food, drinks and space.','Взгляд на наши блюда, напитки и атмосферу.','O privire asupra preparatelor, băuturilor și localului nostru.','Uno sguardo ai nostri piatti, alle bevande e al locale.','Un vistazo a nuestros platos, bebidas y local.'],
hint:['Faites défiler sur le côté. Touchez une photo pour l’agrandir.','Scroll sideways for more. Tap a photo to open it.','Листайте вбок. Нажмите на фото, чтобы открыть.','Derulați lateral. Atingeți o fotografie pentru a o deschide.','Scorri di lato. Tocca una foto per aprirla.','Desliza hacia el lado. Toca una foto para abrirla.'],
prev:['Précédent','Previous','Назад','Înapoi','Precedente','Anterior'],
next:['Suivant','Next','Далее','Următor','Successiva','Siguiente'],
close:['Fermer','Close','Закрыть','Închide','Chiudi','Cerrar'],
book_lead:['Dites-nous quand vous venez et nous confirmons par e-mail ou par téléphone. Pour les groupes de plus de 8 personnes, merci de nous appeler.','Tell us when you’re coming and we’ll confirm by email or phone. For groups over 8, please call us.','Сообщите, когда придёте, и мы подтвердим по почте или по телефону. Для групп больше 8 человек, пожалуйста, позвоните нам.','Spuneți-ne când veniți și confirmăm prin e-mail sau telefon. Pentru grupuri de peste 8 persoane, vă rugăm să ne sunați.','Diteci quando venite e confermeremo via e-mail o telefono. Per gruppi di oltre 8 persone, chiamateci.','Dinos cuándo vienes y te confirmaremos por correo o teléfono. Para grupos de más de 8 personas, llámanos.'],
l_name:['Nom','Name','Имя','Nume','Nome','Nombre'],
l_date:['Date','Date','Дата','Data','Data','Fecha'],
l_time:['Heure','Time','Время','Ora','Ora','Hora'],
l_guests:['Personnes','Guests','Гостей','Persoane','Persone','Personas'],
l_phone:['Téléphone','Phone','Телефон','Telefon','Telefono','Teléfono'],
l_notes:['Allergies ou occasion spéciale','Allergies or special occasion','Аллергии или особый повод','Alergii sau ocazie specială','Allergie o occasione speciale','Alergias u ocasión especial'],
submit:['Demander une réservation','Request booking','Отправить запрос','Trimite cererea','Richiedi la prenotazione','Solicitar reserva'],
follow:['Suivez-nous','Follow us','Мы в соцсетях','Urmărește-ne','Seguici','Síguenos'],
nav_contact:['Contact','Contact','Контакты','Contact','Contatti','Contacto'],
contact_h:['Nous contacter','Contact us','Свяжитесь с нами','Contactați-ne','Contattaci','Contáctanos'],
contact_lead:['Une question, un avis ou un problème avec le site ? Écrivez-nous, nous vous répondons dès que possible.','A question, feedback or a problem with the site? Write to us and we’ll reply as soon as we can.','Вопрос, отзыв или проблема с сайтом? Напишите нам, и мы ответим как можно скорее.','O întrebare, o părere sau o problemă cu site-ul? Scrieți-ne și vă răspundem cât mai curând.','Una domanda, un parere o un problema con il sito? Scrivici e ti risponderemo il prima possibile.','¿Una pregunta, una opinión o un problema con la web? Escríbenos y te responderemos lo antes posible.'],
c_topic:['Sujet','Subject','Тема','Subiect','Argomento','Asunto'],
c_q:['Question','Question','Вопрос','Întrebare','Domanda','Pregunta'],
c_f:['Avis ou suggestion','Feedback','Отзыв или предложение','Părere sau sugestie','Parere o suggerimento','Opinión o sugerencia'],
c_i:['Signaler un problème','Report an issue','Сообщить о проблеме','Raportați o problemă','Segnala un problema','Informar de un problema'],
c_msg:['Votre message','Your message','Ваше сообщение','Mesajul dvs.','Il tuo messaggio','Tu mensaje'],
c_send:['Envoyer le message','Send message','Отправить сообщение','Trimite mesajul','Invia il messaggio','Enviar mensaje'],
noslots:['Plus de créneaux aujourd’hui, choisissez une autre date','No more times today, please choose another date','На сегодня времени нет, выберите другую дату','Nu mai sunt ore disponibile azi, alegeți altă dată','Nessun orario disponibile oggi, scegli un’altra data','Hoy ya no hay horarios, elige otra fecha'],
call:['Appeler','Call','Позвонить','Sună','Chiama','Llamar'],
sd_title:['Comment souhaitez-vous envoyer votre demande ?','How would you like to send your request?','Как вы хотите отправить запрос?','Cum doriți să trimiteți cererea?','Come vuoi inviare la richiesta?','¿Cómo quieres enviar tu solicitud?'],
sd_note:['Votre demande n’est envoyée que lorsque vous appuyez sur « envoyer » dans l’application. Nous vous confirmerons ensuite votre réservation.','Your request is only sent when you press send in the app. We will then confirm your booking.','Запрос отправляется только после нажатия «отправить» в приложении. Затем мы подтвердим вашу бронь.','Cererea este trimisă doar după ce apăsați „trimite” în aplicație. Apoi vă vom confirma rezervarea.','La richiesta viene inviata solo quando premi «invia» nell’app. Poi ti confermeremo la prenotazione.','Tu solicitud solo se envía cuando pulsas «enviar» en la aplicación. Después confirmaremos tu reserva.']
};
/* menu titles and notes: en, ru, ro, it, es (French is the original text) */
var T={
'Brunch':['Brunch','Бранч','Brunch','Brunch','Brunch'],
'Toasts & salades':['Toasts & salads','Тосты и салаты','Toasturi și salate','Toast e insalate','Tostadas y ensaladas'],
'Plats':['Mains','Основные блюда','Feluri principale','Piatti principali','Platos principales'],
'Desserts':['Desserts','Десерты','Deserturi','Dolci','Postres'],
'Boissons':['Drinks','Напитки','Băuturi','Bevande','Bebidas'],
'Cocktails':['Cocktails','Коктейли','Cocktailuri','Cocktail','Cócteles'],
'Smoothies':['Smoothies','Смузи','Smoothie-uri','Smoothie','Batidos'],
'Croissants':['Croissants','Круассаны','Croissante','Croissant','Croissants'],
'Omelettes & œufs':['Omelettes & eggs','Омлеты и яйца','Omlete și ouă','Omelette e uova','Omelettes y huevos'],
'Toasts':['Toasts','Тосты','Toasturi','Toast','Tostadas'],
'Salades':['Salads','Салаты','Salate','Insalate','Ensaladas'],
'Suppléments':['Extras','Добавки','Suplimente','Aggiunte','Extras'],
'Amazonica Enfant':['Amazonica Kids','Детское меню','Meniu copii','Menù bambini','Menú infantil'],
'Soft drinks':['Soft drinks','Безалкогольные напитки','Băuturi răcoritoare','Bibite analcoliche','Refrescos'],
'Cafés':['Coffee','Кофе','Cafea','Caffè','Cafés'],
'Cafés au lait':['Milk coffees','Кофе с молоком','Cafele cu lapte','Caffè con latte','Cafés con leche'],
'Matcha':['Matcha','Матча','Matcha','Matcha','Matcha'],
'Boissons froides':['Cold drinks','Холодные напитки','Băuturi reci','Bevande fredde','Bebidas frías'],
'Thés & chocolat':['Tea & chocolate','Чай и шоколад','Ceai și ciocolată','Tè e cioccolata','Té y chocolate'],
'Bières':['Beer','Пиво','Bere','Birre','Cervezas'],
'Tropical cocktails':['Tropical cocktails','Тропические коктейли','Cocktailuri tropicale','Cocktail tropicali','Cócteles tropicales'],
'Soft cocktails':['Soft cocktails','Безалкогольные коктейли','Cocktailuri fără alcool','Cocktail analcolici','Cócteles sin alcohol'],
'Élixir smoothies':['Élixir smoothies','Смузи Élixir','Smoothie-uri Élixir','Smoothie Élixir','Batidos Élixir'],
'Boissons gazeuses':['Soft drinks','Газированные напитки','Băuturi carbogazoase','Bevande gassate','Bebidas con gas'],
'Matcha & ube':['Matcha & ube','Матча и убе','Matcha și ube','Matcha e ube','Matcha y ube'],
'Cafés & boissons glacés':['Iced coffee & drinks','Холодный кофе и напитки','Cafea și băuturi cu gheață','Caffè e bevande ghiacciate','Cafés y bebidas heladas'],
'Suppléments boissons':['Drink extras','Добавки к напиткам','Suplimente pentru băuturi','Aggiunte per le bevande','Extras para bebidas'],
'Lait végétal':['Plant-based milk','Растительное молоко','Lapte vegetal','Latte vegetale','Leche vegetal'],
'Arômes':['Flavors','Сиропы','Arome','Aromi','Aromas'],
N1:['Sauces of your choice: Algerian, white, samurai, barbecue, mayonnaise or ketchup.','Соусы на выбор: алжирский, белый, самурай, барбекю, майонез или кетчуп.','Sosuri la alegere: algerian, alb, samurai, barbecue, maioneză sau ketchup.','Salse a scelta: algerina, bianca, samurai, barbecue, maionese o ketchup.','Salsas a elegir: argelina, blanca, samurái, barbacoa, mayonesa o ketchup.'],
N3:['Plant-based milk extra: oat, almond or coconut (+ 0,50 €).','Добавка растительного молока: овсяное, миндальное или кокосовое (+ 0,50 €).','Supliment lapte vegetal: de ovăz, de migdale sau de cocos (+ 0,50 €).','Supplemento latte vegetale: avena, mandorla o cocco (+ 0,50 €).','Suplemento de leche vegetal: avena, almendra o coco (+ 0,50 €).'],
N2:['Salmon + 4,00 € • Avocado + 3,00 € • Egg + 2,00 € • Fries + 3,00 € • Salad + 3,00 € • Truffle + 5,00 € • Chicken + 3,00 € • Feta + 3,00 € • Bacon + 3,00 €','Лосось + 4,00 € • Авокадо + 3,00 € • Яйцо + 2,00 € • Картофель фри + 3,00 € • Салат + 3,00 € • Трюфель + 5,00 € • Курица + 3,00 € • Фета + 3,00 € • Бекон + 3,00 €','Somon + 4,00 € • Avocado + 3,00 € • Ou + 2,00 € • Cartofi prăjiți + 3,00 € • Salată + 3,00 € • Trufe + 5,00 € • Pui + 3,00 € • Feta + 3,00 € • Bacon + 3,00 €','Salmone + 4,00 € • Avocado + 3,00 € • Uovo + 2,00 € • Patatine fritte + 3,00 € • Insalata + 3,00 € • Tartufo + 5,00 € • Pollo + 3,00 € • Feta + 3,00 € • Bacon + 3,00 €','Salmón + 4,00 € • Aguacate + 3,00 € • Huevo + 2,00 € • Patatas fritas + 3,00 € • Ensalada + 3,00 € • Trufa + 5,00 € • Pollo + 3,00 € • Feta + 3,00 € • Bacon + 3,00 €']
};
function tr(s){if(!li)return s;var k=T[s];if(!k){if(s.indexOf('Sauces au choix')===0)k=T.N1;else if(s.indexOf('Saumon + 4')===0)k=T.N2;else if(s.indexOf('Supplément lait')===0)k=T.N3}return k?k[li-1]:s}

var MENU={
'Brunch':[
['Amazonica Signature','',`Exotic Morning|Œufs brouillés, salade, croissant sucré au choix, jus d’orange pressé et boisson chaude.|25,90
Amazonica Brunch|Omelette aux champignons, salade, toast, beurre, confiture, jus d’orange pressé et boisson chaude.|24,90
Deluxe Breakfast|Croissant au poulet, salade, brioche gourmande, jus d’orange pressé et boisson chaude.|25,90`],
['Omelettes & œufs','',`Œufs au plat|Œufs au plat, toast et salade.|11,90
Œufs brouillés à la truffe|Œufs brouillés à la truffe, toast et salade.|16,90
Œufs brouillés nature|Œufs brouillés, toast et salade.|12,90
Omelette aux champignons ou au fromage|Omelette au choix : champignons ou fromage, accompagnée de toast et de salade.|12,90
Omelette aux épinards|Omelette aux épinards, toast et salade.|12,90
Omelette nature|Omelette nature, toast et salade.|11,90`],
['Croissants','',`Croissant salé au saumon|Croissant garni de cream cheese, saumon, avocat, concombre et œuf, accompagné de salade.|12,90
Croissant salé au poulet|Croissant garni de cream cheese, poulet, avocat, concombre et œuf, accompagné de salade.|11,90
Croissant salé au bœuf effiloché|Croissant garni de cream cheese, bœuf effiloché, avocat, concombre et œuf, accompagné de salade.|11,90
Galettes au fromage, saumon et sauce tzatziki|Quatre galettes au fromage, saumon, sauce tzatziki, huile à la menthe et aneth.|13,90
Pancakes salés au saumon|Pancakes salés garnis de saumon, roquette, cream cheese, œuf poché et sauce hollandaise.|11,90`]],
'Toasts & salades':[
['Toasts','',`Toast à la truffe|Toast garni de crème de truffe, champignons, œufs brouillés à la truffe et parmesan, accompagné de salade.|16,90
Toast au chèvre|Toast garni de fromage de chèvre, avocat et miel, accompagné de salade.|13,90
Toast au poulet|Toast garni de cream cheese, avocat, poulet et œuf, accompagné de salade.|14,90
Toast avocat-saumon|Toast garni de saumon, avocat, roquette et feta, accompagné de salade.|14,90
Toast guacamole|Toast garni de guacamole, œufs brouillés et saumon, accompagné de salade.|14,90
Toast gourmand au bacon|Toast garni de cream cheese, œufs brouillés, bacon et parmesan.|14,90
Toast mozzarella|Toast garni de cream cheese, mozzarella, tomates et sauce pesto, accompagné de salade.|14,90
Toast omelette|Toast garni d’omelette et d’avocat, accompagné de salade.|12,90
Toast végétarien|Toast garni de guacamole et de légumes grillés, accompagné de salade.|12,90`],
['Salades','',`Salade César|Salade, croûtons, œuf, poulet et sauce César.|14,90
Salade au poulet|Salade, avocat, tomates, concombre, quinoa, poulet, citron et sauce tzatziki.|14,90
Salade burrata|Salade, tomates, burrata, avocat et sauce balsamique.|13,90
Salade aux légumes grillés|Légumes grillés, graines de sésame et sauce balsamique.|11,90`]],
'Plats':[
['Refined','',`Bénédicte à la truffe|Pain muffin, crème de truffe, saumon, champignons, œuf poché et sauce hollandaise, accompagnés de pommes de terre au four.|17,90
Bénédicte au saumon ou au bœuf effiloché|Pain muffin, cream cheese, tomates et poivrons confits, œuf poché et sauce hollandaise, accompagnés de pommes de terre au four.|14,90
Légumes méditerranéens|Légumes sautés, œufs, feta et frites.|12,90
Légumes méditerranéens au poulet|Légumes sautés, œufs, feta, poulet et frites.|13,90`],
['Burgers','Sauces au choix : sauce algérienne, sauce blanche, sauce samouraï, sauce barbecue, mayonnaise ou ketchup.',`Burger classique|Steak haché, fromage, salade, tomates, cornichons et oignons frits. Accompagnement au choix : frites ou salade.|16,90
Burger classique au bacon|Steak haché, fromage, bacon, salade, tomates, cornichons et oignons frits. Accompagnement au choix : frites ou salade.|17,90
Burger à la truffe|Steak haché, sauce à la truffe, fromage, roquette, parmesan et champignons. Accompagnement au choix : frites ou salade.|21,90
Burger au poulet|Poulet, fromage, salade, tomates, oignons frits, œuf au plat et sauce au choix. Accompagnement au choix : frites ou salade.|17,90
Burger végétarien|Galette végétale, avocat, salade, tomates et concombre. Accompagnement au choix : frites ou salade.|14,90`],
['Signature Collection','',`Pain Signature au saumon|Pain signature garni de saumon, œuf, avocat, concombre et salade.|14,90
Pain Signature au bœuf effiloché|Pain signature garni de bœuf effiloché, œuf, avocat, concombre et salade.|16,90
Pain Signature au poulet|Pain signature garni de poulet, œuf, avocat, concombre et salade.|13,90
Pain Signature végétarien|Pain signature garni de guacamole, légumes grillés et salade.|11,90`],
['Suppléments','Saumon + 4,00 € • Avocat + 3,00 € • Œuf + 2,00 € • Frites + 3,00 € • Salade + 3,00 € • Truffe + 5,00 € • Poulet + 3,00 € • Feta + 3,00 € • Bacon + 3,00 €',''],
['Amazonica Enfant','',`Menu enfant|Nuggets de poulet, frites, sauce au choix, jus d’orange et une boule de glace au choix.|11,90`]],
'Desserts':[
['Desserts','',`Boule de glace|Parfums au choix : fraise, vanille ou chocolat.|3,90
Croissant au beurre||2,90
Croissant fourré|Garnitures au choix : pistache, fruits rouges, chocolat ou caramel.|5,90
Galettes au fromage (syrniki maison)|Galettes maison à base de fromage blanc égoutté et sucré, servies avec de la confiture de fruits rouges et de la crème fraîche.|11,90
Gâteau maison||11,90
Greek Yogurt & Fruit Bowl|Yaourt grec, fruits frais, granola, miel et graines de chia.|11,90
Pancakes|Garnitures au choix : pistache, caramel, chocolat, fruits rouges, caramel salé, miel, sirop d’érable ou crème mascarpone.|12,90
Brioche gourmande|Garnitures au choix : pistache, fruits rouges, chocolat, caramel, caramel salé, miel, sirop d’érable ou crème mascarpone.|13,90`]],
'Boissons':[
['Boissons gazeuses','',`Coca-Cola Original||3,90
Coca-Cola Zero||3,90
Fanta||3,90
Sprite||3,90
San Pellegrino||3,90
Evian||3,90
Jus d’orange frais pressé||4,90`],
['Cafés','',`Ristretto||1,50
Espresso||2,00
Double Espresso||2,90
Espresso décaféiné||1,90
Espresso noisette||2,90
Americano||2,90`],
['Matcha & ube','',`Matcha Latte||5,90
Matcha Macchiato||5,90
Dirty Matcha||6,90
Ube Latte||5,90`],
['Cafés au lait','',`Cappuccino||4,50
Latte||4,50
Latte Macchiato||5,90`],
['Suppléments boissons','',`Lait végétal|Avoine, amande ou coco.|+ 0,50
Arômes|Caramel, vanille, noisette ou cookie.|+ 0,50`],
['Thés & chocolat','',`Thé Kusmi Tea|Parfums au choix : jasmin, fruits rouges, verveine-menthe, détox, bergamote ou English Breakfast.|3,90
Infusion|Parfums au choix : bergamote, jasmin ou fruits rouges.|5,90
Chocolat chaud||4,90`],
['Cafés & boissons glacés','Supplément lait végétal : avoine, amande ou coco (+ 0,50 €).',`Iced Americano||4,90
Iced Latte|Arômes au choix : caramel, vanille ou cookie (+ 0,50 €).|5,90
Matcha Glacé|Arômes au choix : fraise ou coco (+ 0,50 €).|5,90
Ube Glacé|Arômes au choix : fraise ou coco (+ 0,50 €).|5,90
Dirty Matcha Glacé|Arômes au choix : fraise ou coco (+ 0,50 €).|6,90
Dirty Ube Glacé|Arômes au choix : fraise ou coco (+ 0,50 €).|6,90`],
['Bières','',`Bière Moretti||5,90
Bière Peroni||5,90
Bière Peroni sans alcool||4,90`]],
'Smoothies':[
['Élixir smoothies','',`Amazonica Élixir|Mangue, ananas et lait d’amande.|7,90
Tropical Mango|Mangue, ananas, banane et jus d’orange.|7,90
Forest|Jus de pomme, menthe, fruits rouges et lait.|7,90
Berry Explosion|Banane, fruits rouges et lait.|7,90
Coconut Pineapple|Ananas, banane et lait de coco.|7,90
Passion Élixir|Mangue, fruit de la passion, ananas et jus d’orange.|7,90`]],
'Cocktails':[
['Soft cocktails','',`Blue Ocean|Sirop de curaçao, jus d’ananas et eau pétillante.|9,90
Limonade Passion|Sirop de fruit de la passion, jus de citron, menthe, citron vert et eau pétillante.|8,90
Passion Mojito|Fruit de la passion, menthe, citron vert et eau pétillante.|10,90
Strawberry Colada|Fraise, crème de coco, jus d’ananas et Sprite.|10,90
Strawberry Tonic|Sirop de fraise, citron vert et Schweppes.|9,90
Ube Coconut Cooler|Sirop d’ube, lait de coco et jus de citron vert.|9,90
Virgin Mojito|Menthe, citron vert, sucre de canne et Sprite.|9,90
Virgin Mojito Cherry|Menthe, citron vert, sucre de canne, Sprite et sirop de cerise.|10,90`],
['Tropical cocktails','',`Amazonica Gold Spritz|Prosecco, fruit de la passion, sirop d’ananas, liqueur de mangue et eau pétillante.|11,90
Mimosa Blue|Prosecco, jus d’orange et curaçao bleu.|9,90
Passion Royale|Martini, fraise et citron vert.|12,90
Peach Bellini|Prosecco et purée de pêche.|9,90
Porn Star|Jus de fruit de la passion, sirop de vanille, jus de citron, liqueur de fruit de la passion et Prosecco.|11,90
Tropical Spritz|Aperol, Prosecco, eau pétillante et orange.|11,90`]]
};

var D={};(`Exotic Morning=Scrambled eggs, salad, sweet croissant of your choice, freshly squeezed orange juice and a hot drink.|Яичница-болтунья, салат, сладкий круассан на выбор, свежевыжатый апельсиновый сок и горячий напиток.|Ouă jumări, salată, croissant dulce la alegere, suc de portocale proaspăt stors și o băutură caldă.|Uova strapazzate, insalata, croissant dolce a scelta, spremuta d’arancia e una bevanda calda.|Huevos revueltos, ensalada, cruasán dulce a elegir, zumo de naranja natural y una bebida caliente.
Amazonica Brunch=Mushroom omelette, salad, toast, butter, jam, freshly squeezed orange juice and a hot drink.|Омлет с грибами, салат, тост, масло, джем, свежевыжатый апельсиновый сок и горячий напиток.|Omletă cu ciuperci, salată, toast, unt, gem, suc de portocale proaspăt stors și o băutură caldă.|Omelette ai funghi, insalata, toast, burro, marmellata, spremuta d’arancia e una bevanda calda.|Tortilla francesa de champiñones, ensalada, tostada, mantequilla, mermelada, zumo de naranja natural y una bebida caliente.
Deluxe Breakfast=Chicken croissant, salad, indulgent brioche, freshly squeezed orange juice and a hot drink.|Круассан с курицей, салат, бриошь, свежевыжатый апельсиновый сок и горячий напиток.|Croissant cu pui, salată, brioșă gurmandă, suc de portocale proaspăt stors și o băutură caldă.|Croissant al pollo, insalata, brioche gourmand, spremuta d’arancia e una bevanda calda.|Cruasán de pollo, ensalada, brioche gourmet, zumo de naranja natural y una bebida caliente.
Croissant salé au saumon=Croissant filled with cream cheese, salmon, avocado, cucumber and egg, served with salad.|Круассан со сливочным сыром, лососем, авокадо, огурцом и яйцом, подаётся с салатом.|Croissant umplut cu cremă de brânză, somon, avocado, castravete și ou, servit cu salată.|Croissant farcito con formaggio spalmabile, salmone, avocado, cetriolo e uovo, servito con insalata.|Cruasán relleno de queso crema, salmón, aguacate, pepino y huevo, acompañado de ensalada.
Croissant salé au poulet=Croissant filled with cream cheese, chicken, avocado, cucumber and egg, served with salad.|Круассан со сливочным сыром, курицей, авокадо, огурцом и яйцом, подаётся с салатом.|Croissant umplut cu cremă de brânză, pui, avocado, castravete și ou, servit cu salată.|Croissant farcito con formaggio spalmabile, pollo, avocado, cetriolo e uovo, servito con insalata.|Cruasán relleno de queso crema, pollo, aguacate, pepino y huevo, acompañado de ensalada.
Croissant salé au bœuf effiloché=Croissant filled with cream cheese, pulled beef, avocado, cucumber and egg, served with salad.|Круассан со сливочным сыром, тушёной говядиной, авокадо, огурцом и яйцом, подаётся с салатом.|Croissant umplut cu cremă de brânză, vită trasă, avocado, castravete și ou, servit cu salată.|Croissant farcito con formaggio spalmabile, manzo sfilacciato, avocado, cetriolo e uovo, servito con insalata.|Cruasán relleno de queso crema, ternera deshilachada, aguacate, pepino y huevo, acompañado de ensalada.
Galettes au fromage, saumon et sauce tzatziki=Four cheese galettes with salmon, tzatziki sauce, mint oil and dill.|Четыре сырные лепёшки с лососем, соусом цацики, мятным маслом и укропом.|Patru turte cu brânză, somon, sos tzatziki, ulei de mentă și mărar.|Quattro frittelle al formaggio con salmone, salsa tzatziki, olio alla menta ed aneto.|Cuatro tortitas de queso con salmón, salsa tzatziki, aceite de menta y eneldo.
Pancakes salés au saumon=Savory pancakes topped with salmon, arugula, cream cheese, poached egg and hollandaise sauce.|Солёные панкейки с лососем, рукколой, сливочным сыром, яйцом пашот и соусом голландез.|Clătite sărate cu somon, rucola, cremă de brânză, ou poșat și sos olandez.|Pancake salati con salmone, rucola, formaggio spalmabile, uovo in camicia e salsa olandese.|Tortitas saladas con salmón, rúcula, queso crema, huevo poché y salsa holandesa.
Œufs brouillés à la truffe=Truffle scrambled eggs, toast and salad.|Яичница-болтунья с трюфелем, тост и салат.|Ouă jumări cu trufe, toast și salată.|Uova strapazzate al tartufo, toast e insalata.|Huevos revueltos con trufa, tostada y ensalada.
Œufs brouillés nature=Scrambled eggs, toast and salad.|Яичница-болтунья, тост и салат.|Ouă jumări, toast și salată.|Uova strapazzate, toast e insalata.|Huevos revueltos, tostada y ensalada.
Omelette aux champignons ou au fromage=Choice of mushroom or cheese omelette, served with toast and salad.|Омлет на выбор: с грибами или с сыром, подаётся с тостом и салатом.|Omletă la alegere: cu ciuperci sau cu brânză, servită cu toast și salată.|Omelette a scelta: ai funghi o al formaggio, servita con toast e insalata.|Tortilla francesa a elegir: de champiñones o de queso, acompañada de tostada y ensalada.
Omelette aux épinards=Spinach omelette, toast and salad.|Омлет со шпинатом, тост и салат.|Omletă cu spanac, toast și salată.|Omelette agli spinaci, toast e insalata.|Tortilla francesa de espinacas, tostada y ensalada.
Omelette nature=Plain omelette, toast and salad.|Классический омлет, тост и салат.|Omletă simplă, toast și salată.|Omelette semplice, toast e insalata.|Tortilla francesa natural, tostada y ensalada.
Toast à la truffe=Toast topped with truffle cream, mushrooms, truffle scrambled eggs and parmesan, served with salad.|Тост с трюфельным кремом, грибами, яичницей-болтуньей с трюфелем и пармезаном, подаётся с салатом.|Toast cu cremă de trufe, ciuperci, ouă jumări cu trufe și parmezan, servit cu salată.|Toast con crema al tartufo, funghi, uova strapazzate al tartufo e parmigiano, servito con insalata.|Tostada con crema de trufa, champiñones, huevos revueltos con trufa y parmesano, acompañada de ensalada.
Toast au chèvre=Toast topped with goat cheese, avocado and honey, served with salad.|Тост с козьим сыром, авокадо и мёдом, подаётся с салатом.|Toast cu brânză de capră, avocado și miere, servit cu salată.|Toast con formaggio di capra, avocado e miele, servito con insalata.|Tostada con queso de cabra, aguacate y miel, acompañada de ensalada.
Toast au poulet=Toast topped with cream cheese, avocado, chicken and egg, served with salad.|Тост со сливочным сыром, авокадо, курицей и яйцом, подаётся с салатом.|Toast cu cremă de brânză, avocado, pui și ou, servit cu salată.|Toast con formaggio spalmabile, avocado, pollo e uovo, servito con insalata.|Tostada con queso crema, aguacate, pollo y huevo, acompañada de ensalada.
Toast guacamole=Toast topped with guacamole, scrambled eggs and salmon, served with salad.|Тост с гуакамоле, яичницей-болтуньей и лососем, подаётся с салатом.|Toast cu guacamole, ouă jumări și somon, servit cu salată.|Toast con guacamole, uova strapazzate e salmone, servito con insalata.|Tostada con guacamole, huevos revueltos y salmón, acompañada de ensalada.
Toast gourmand au bacon=Toast topped with cream cheese, scrambled eggs, bacon and parmesan.|Тост со сливочным сыром, яичницей-болтуньей, беконом и пармезаном.|Toast cu cremă de brânză, ouă jumări, bacon și parmezan.|Toast con formaggio spalmabile, uova strapazzate, bacon e parmigiano.|Tostada con queso crema, huevos revueltos, bacon y parmesano.
Toast mozzarella=Toast topped with cream cheese, mozzarella, tomatoes and pesto sauce, served with salad.|Тост со сливочным сыром, моцареллой, помидорами и соусом песто, подаётся с салатом.|Toast cu cremă de brânză, mozzarella, roșii și sos pesto, servit cu salată.|Toast con formaggio spalmabile, mozzarella, pomodori e salsa pesto, servito con insalata.|Tostada con queso crema, mozzarella, tomates y salsa pesto, acompañada de ensalada.
Toast omelette=Toast topped with omelette and avocado, served with salad.|Тост с омлетом и авокадо, подаётся с салатом.|Toast cu omletă și avocado, servit cu salată.|Toast con omelette e avocado, servito con insalata.|Tostada con tortilla francesa y aguacate, acompañada de ensalada.
Toast végétarien=Toast topped with guacamole and grilled vegetables, served with salad.|Тост с гуакамоле и овощами гриль, подаётся с салатом.|Toast cu guacamole și legume la grătar, servit cu salată.|Toast con guacamole e verdure grigliate, servito con insalata.|Tostada con guacamole y verduras a la parrilla, acompañada de ensalada.
Salade César=Salad, croutons, egg, chicken and Caesar dressing.|Салат, сухарики, яйцо, курица и соус Цезарь.|Salată, crutoane, ou, pui și sos Caesar.|Insalata, crostini, uovo, pollo e salsa Caesar.|Ensalada, picatostes, huevo, pollo y salsa César.
Salade au poulet=Salad, avocado, tomatoes, cucumber, quinoa, chicken, lemon and tzatziki sauce.|Салат, авокадо, помидоры, огурец, киноа, курица, лимон и соус цацики.|Salată, avocado, roșii, castravete, quinoa, pui, lămâie și sos tzatziki.|Insalata, avocado, pomodori, cetriolo, quinoa, pollo, limone e salsa tzatziki.|Ensalada, aguacate, tomates, pepino, quinoa, pollo, limón y salsa tzatziki.
Salade burrata=Salad, tomatoes, burrata, avocado and balsamic sauce.|Салат, помидоры, буррата, авокадо и бальзамический соус.|Salată, roșii, burrata, avocado și sos balsamic.|Insalata, pomodori, burrata, avocado e salsa balsamica.|Ensalada, tomates, burrata, aguacate y salsa balsámica.
Salade aux légumes grillés=Grilled vegetables, sesame seeds and balsamic sauce.|Овощи гриль, семена кунжута и бальзамический соус.|Legume la grătar, semințe de susan și sos balsamic.|Verdure grigliate, semi di sesamo e salsa balsamica.|Verduras a la parrilla, semillas de sésamo y salsa balsámica.
Bénédicte à la truffe=English muffin, truffle cream, salmon, mushrooms, poached egg and hollandaise sauce, served with oven-baked potatoes.|Английская булочка, трюфельный крем, лосось, грибы, яйцо пашот и соус голландез, подаётся с запечённым картофелем.|Pâine muffin, cremă de trufe, somon, ciuperci, ou poșat și sos olandez, servite cu cartofi la cuptor.|Pane muffin, crema al tartufo, salmone, funghi, uovo in camicia e salsa olandese, serviti con patate al forno.|Pan muffin, crema de trufa, salmón, champiñones, huevo poché y salsa holandesa, acompañados de patatas al horno.
Bénédicte au saumon ou au bœuf effiloché=English muffin, cream cheese, confit tomatoes and peppers, poached egg and hollandaise sauce, served with oven-baked potatoes.|Английская булочка, сливочный сыр, томлёные помидоры и перцы, яйцо пашот и соус голландез, подаётся с запечённым картофелем.|Pâine muffin, cremă de brânză, roșii și ardei confiați, ou poșat și sos olandez, servite cu cartofi la cuptor.|Pane muffin, formaggio spalmabile, pomodori e peperoni confit, uovo in camicia e salsa olandese, serviti con patate al forno.|Pan muffin, queso crema, tomates y pimientos confitados, huevo poché y salsa holandesa, acompañados de patatas al horno.
Légumes méditerranéens=Sautéed vegetables, eggs, feta and fries.|Обжаренные овощи, яйца, фета и картофель фри.|Legume sotate, ouă, feta și cartofi prăjiți.|Verdure saltate, uova, feta e patatine fritte.|Verduras salteadas, huevos, feta y patatas fritas.
Légumes méditerranéens au poulet=Sautéed vegetables, eggs, feta, chicken and fries.|Обжаренные овощи, яйца, фета, курица и картофель фри.|Legume sotate, ouă, feta, pui și cartofi prăjiți.|Verdure saltate, uova, feta, pollo e patatine fritte.|Verduras salteadas, huevos, feta, pollo y patatas fritas.
Burger classique=Beef patty, cheese, lettuce, tomatoes, pickles and fried onions. Choice of side: fries or salad.|Говяжья котлета, сыр, салат, помидоры, маринованные огурцы и жареный лук. Гарнир на выбор: картофель фри или салат.|Chiftea de vită, brânză, salată verde, roșii, castraveți murați și ceapă prăjită. Garnitură la alegere: cartofi prăjiți sau salată.|Hamburger di manzo, formaggio, insalata, pomodori, cetriolini e cipolle fritte. Contorno a scelta: patatine fritte o insalata.|Hamburguesa de ternera, queso, lechuga, tomates, pepinillos y cebolla frita. Guarnición a elegir: patatas fritas o ensalada.
Burger classique au bacon=Beef patty, cheese, bacon, lettuce, tomatoes, pickles and fried onions. Choice of side: fries or salad.|Говяжья котлета, сыр, бекон, салат, помидоры, маринованные огурцы и жареный лук. Гарнир на выбор: картофель фри или салат.|Chiftea de vită, brânză, bacon, salată verde, roșii, castraveți murați și ceapă prăjită. Garnitură la alegere: cartofi prăjiți sau salată.|Hamburger di manzo, formaggio, bacon, insalata, pomodori, cetriolini e cipolle fritte. Contorno a scelta: patatine fritte o insalata.|Hamburguesa de ternera, queso, bacon, lechuga, tomates, pepinillos y cebolla frita. Guarnición a elegir: patatas fritas o ensalada.
Burger à la truffe=Beef patty, truffle sauce, cheese, arugula, parmesan and mushrooms. Choice of side: fries or salad.|Говяжья котлета, трюфельный соус, сыр, руккола, пармезан и грибы. Гарнир на выбор: картофель фри или салат.|Chiftea de vită, sos de trufe, brânză, rucola, parmezan și ciuperci. Garnitură la alegere: cartofi prăjiți sau salată.|Hamburger di manzo, salsa al tartufo, formaggio, rucola, parmigiano e funghi. Contorno a scelta: patatine fritte o insalata.|Hamburguesa de ternera, salsa de trufa, queso, rúcula, parmesano y champiñones. Guarnición a elegir: patatas fritas o ensalada.
Burger au poulet=Chicken, cheese, lettuce, tomatoes, fried onions, fried egg and sauce of your choice. Choice of side: fries or salad.|Курица, сыр, салат, помидоры, жареный лук, глазунья и соус на выбор. Гарнир на выбор: картофель фри или салат.|Pui, brânză, salată verde, roșii, ceapă prăjită, ou ochi și sos la alegere. Garnitură la alegere: cartofi prăjiți sau salată.|Pollo, formaggio, insalata, pomodori, cipolle fritte, uovo al tegamino e salsa a scelta. Contorno a scelta: patatine fritte o insalata.|Pollo, queso, lechuga, tomates, cebolla frita, huevo frito y salsa a elegir. Guarnición a elegir: patatas fritas o ensalada.
Burger végétarien=Veggie patty, avocado, lettuce, tomatoes and cucumber. Choice of side: fries or salad.|Растительная котлета, авокадо, салат, помидоры и огурец. Гарнир на выбор: картофель фри или салат.|Chiftea vegetală, avocado, salată verde, roșii și castravete. Garnitură la alegere: cartofi prăjiți sau salată.|Burger vegetale, avocado, insalata, pomodori e cetriolo. Contorno a scelta: patatine fritte o insalata.|Hamburguesa vegetal, aguacate, lechuga, tomates y pepino. Guarnición a elegir: patatas fritas o ensalada.
Pain Signature au saumon=Signature bread topped with salmon, egg, avocado, cucumber and salad.|Фирменный хлеб с лососем, яйцом, авокадо, огурцом и салатом.|Pâine signature cu somon, ou, avocado, castravete și salată.|Pane signature con salmone, uovo, avocado, cetriolo e insalata.|Pan signature con salmón, huevo, aguacate, pepino y ensalada.
Pain Signature au bœuf effiloché=Signature bread topped with pulled beef, egg, avocado, cucumber and salad.|Фирменный хлеб с тушёной говядиной, яйцом, авокадо, огурцом и салатом.|Pâine signature cu vită trasă, ou, avocado, castravete și salată.|Pane signature con manzo sfilacciato, uovo, avocado, cetriolo e insalata.|Pan signature con ternera deshilachada, huevo, aguacate, pepino y ensalada.
Pain Signature au poulet=Signature bread topped with chicken, egg, avocado, cucumber and salad.|Фирменный хлеб с курицей, яйцом, авокадо, огурцом и салатом.|Pâine signature cu pui, ou, avocado, castravete și salată.|Pane signature con pollo, uovo, avocado, cetriolo e insalata.|Pan signature con pollo, huevo, aguacate, pepino y ensalada.
Pain Signature végétarien=Signature bread topped with guacamole, grilled vegetables and salad.|Фирменный хлеб с гуакамоле, овощами гриль и салатом.|Pâine signature cu guacamole, legume la grătar și salată.|Pane signature con guacamole, verdure grigliate e insalata.|Pan signature con guacamole, verduras a la parrilla y ensalada.
Menu enfant=Chicken nuggets, fries, sauce of your choice, orange juice and a scoop of ice cream of your choice.|Куриные нагетсы, картофель фри, соус на выбор, апельсиновый сок и шарик мороженого на выбор.|Nuggets de pui, cartofi prăjiți, sos la alegere, suc de portocale și o porție de înghețată la alegere.|Nuggets di pollo, patatine fritte, salsa a scelta, succo d’arancia e una pallina di gelato a scelta.|Nuggets de pollo, patatas fritas, salsa a elegir, zumo de naranja y una bola de helado a elegir.
Boule de glace=Flavors of your choice: strawberry, vanilla or chocolate.|Вкусы на выбор: клубника, ваниль или шоколад.|Arome la alegere: căpșuni, vanilie sau ciocolată.|Gusti a scelta: fragola, vaniglia o cioccolato.|Sabores a elegir: fresa, vainilla o chocolate.
Croissant fourré=Filling of your choice: pistachio, red berries, chocolate or caramel.|Начинка на выбор: фисташка, красные ягоды, шоколад или карамель.|Umplutură la alegere: fistic, fructe de pădure, ciocolată sau caramel.|Ripieno a scelta: pistacchio, frutti rossi, cioccolato o caramello.|Relleno a elegir: pistacho, frutos rojos, chocolate o caramelo.
Pancakes=Toppings of your choice: pistachio, caramel, chocolate, red berries, salted caramel, honey, maple syrup or mascarpone cream.|Топпинг на выбор: фисташка, карамель, шоколад, красные ягоды, солёная карамель, мёд, кленовый сироп или крем маскарпоне.|Topping la alegere: fistic, caramel, ciocolată, fructe de pădure, caramel sărat, miere, sirop de arțar sau cremă de mascarpone.|Guarnizioni a scelta: pistacchio, caramello, cioccolato, frutti rossi, caramello salato, miele, sciroppo d’acero o crema al mascarpone.|Toppings a elegir: pistacho, caramelo, chocolate, frutos rojos, caramelo salado, miel, sirope de arce o crema de mascarpone.
Brioche gourmande=Toppings of your choice: pistachio, red berries, chocolate, caramel, salted caramel, honey, maple syrup or mascarpone cream.|Топпинг на выбор: фисташка, красные ягоды, шоколад, карамель, солёная карамель, мёд, кленовый сироп или крем маскарпоне.|Topping la alegere: fistic, fructe de pădure, ciocolată, caramel, caramel sărat, miere, sirop de arțar sau cremă de mascarpone.|Guarnizioni a scelta: pistacchio, frutti rossi, cioccolato, caramello, caramello salato, miele, sciroppo d’acero o crema al mascarpone.|Toppings a elegir: pistacho, frutos rojos, chocolate, caramelo, caramelo salado, miel, sirope de arce o crema de mascarpone.
Iced Latte=Flavors of your choice: caramel, vanilla or cookie (+ 0,50 €).|Аромат на выбор: карамель, ваниль или печенье (+ 0,50 €).|Arome la alegere: caramel, vanilie sau cookie (+ 0,50 €).|Aromi a scelta: caramello, vaniglia o cookie (+ 0,50 €).|Aromas a elegir: caramelo, vainilla o cookie (+ 0,50 €).
Thé Kusmi Tea=Flavors of your choice: jasmine, red fruits, verbena-mint, detox, bergamot or English Breakfast.|Вкусы на выбор: жасмин, красные ягоды, вербена-мята, детокс, бергамот или English Breakfast.|Arome la alegere: iasomie, fructe roșii, verbină-mentă, detox, bergamotă sau English Breakfast.|Gusti a scelta: gelsomino, frutti rossi, verbena-menta, detox, bergamotto o English Breakfast.|Sabores a elegir: jazmín, frutos rojos, verbena y menta, detox, bergamota o English Breakfast.
Amazonica Gold Spritz=Prosecco, passion fruit, pineapple syrup, mango liqueur and sparkling water.|Просекко, маракуйя, ананасовый сироп, ликёр из манго и газированная вода.|Prosecco, fructul pasiunii, sirop de ananas, lichior de mango și apă minerală.|Prosecco, frutto della passione, sciroppo d’ananas, liquore al mango e acqua frizzante.|Prosecco, maracuyá, sirope de piña, licor de mango y agua con gas.
Mimosa Blue=Prosecco, orange juice and blue curaçao.|Просекко, апельсиновый сок и голубой кюрасао.|Prosecco, suc de portocale și curaçao albastru.|Prosecco, succo d’arancia e curaçao blu.|Prosecco, zumo de naranja y curaçao azul.
Passion Royale=Martini, strawberry and lime.|Мартини, клубника и лайм.|Martini, căpșuni și lime.|Martini, fragola e lime.|Martini, fresa y lima.
Peach Bellini=Prosecco and peach purée.|Просекко и персиковое пюре.|Prosecco și piure de piersici.|Prosecco e purea di pesca.|Prosecco y puré de melocotón.
Porn Star=Passion fruit juice, vanilla syrup, lemon juice, passion fruit liqueur and Prosecco.|Сок маракуйи, ванильный сироп, лимонный сок, ликёр из маракуйи и просекко.|Suc de fructul pasiunii, sirop de vanilie, suc de lămâie, lichior de fructul pasiunii și Prosecco.|Succo di frutto della passione, sciroppo di vaniglia, succo di limone, liquore al frutto della passione e Prosecco.|Zumo de maracuyá, sirope de vainilla, zumo de limón, licor de maracuyá y Prosecco.
Tropical Spritz=Aperol, Prosecco, sparkling water and orange.|Апероль, просекко, газированная вода и апельсин.|Aperol, Prosecco, apă minerală și portocală.|Aperol, Prosecco, acqua frizzante e arancia.|Aperol, Prosecco, agua con gas y naranja.
Blue Ocean=Blue curaçao syrup, pineapple juice and sparkling water.|Сироп голубой кюрасао, ананасовый сок и газированная вода.|Sirop de curaçao albastru, suc de ananas și apă minerală.|Sciroppo di curaçao blu, succo d’ananas e acqua frizzante.|Sirope de curaçao azul, zumo de piña y agua con gas.
Passion Mojito=Passion fruit, mint, lime and sparkling water.|Маракуйя, мята, лайм и газированная вода.|Fructul pasiunii, mentă, lime și apă minerală.|Frutto della passione, menta, lime e acqua frizzante.|Maracuyá, menta, lima y agua con gas.
Strawberry Colada=Strawberry, coconut cream, pineapple juice and Sprite.|Клубника, кокосовые сливки, ананасовый сок и Sprite.|Căpșuni, cremă de cocos, suc de ananas și Sprite.|Fragola, crema di cocco, succo d’ananas e Sprite.|Fresa, crema de coco, zumo de piña y Sprite.
Strawberry Tonic=Strawberry syrup, lime and Schweppes.|Клубничный сироп, лайм и Schweppes.|Sirop de căpșuni, lime și Schweppes.|Sciroppo di fragola, lime e Schweppes.|Sirope de fresa, lima y Schweppes.
Ube Coconut Cooler=Ube syrup, coconut milk and lime juice.|Сироп убе, кокосовое молоко и сок лайма.|Sirop de ube, lapte de cocos și suc de lime.|Sciroppo di ube, latte di cocco e succo di lime.|Sirope de ube, leche de coco y zumo de lima.
Virgin Mojito=Mint, lime, cane sugar and Sprite.|Мята, лайм, тростниковый сахар и Sprite.|Mentă, lime, zahăr din trestie și Sprite.|Menta, lime, zucchero di canna e Sprite.|Menta, lima, azúcar de caña y Sprite.
Virgin Mojito Cherry=Mint, lime, cane sugar, Sprite and cherry syrup.|Мята, лайм, тростниковый сахар, Sprite и вишнёвый сироп.|Mentă, lime, zahăr din trestie, Sprite și sirop de cireșe.|Menta, lime, zucchero di canna, Sprite e sciroppo di ciliegia.|Menta, lima, azúcar de caña, Sprite y sirope de cereza.
Amazonica Élixir=Mango, pineapple and almond milk.|Манго, ананас и миндальное молоко.|Mango, ananas și lapte de migdale.|Mango, ananas e latte di mandorla.|Mango, piña y leche de almendra.
Tropical Mango=Mango, pineapple, banana and orange juice.|Манго, ананас, банан и апельсиновый сок.|Mango, ananas, banană și suc de portocale.|Mango, ananas, banana e succo d’arancia.|Mango, piña, plátano y zumo de naranja.
Forest=Apple juice, mint, red berries and milk.|Яблочный сок, мята, красные ягоды и молоко.|Suc de mere, mentă, fructe de pădure și lapte.|Succo di mela, menta, frutti rossi e latte.|Zumo de manzana, menta, frutos rojos y leche.
Berry Explosion=Banana, red berries and milk.|Банан, красные ягоды и молоко.|Banană, fructe de pădure și lapte.|Banana, frutti rossi e latte.|Plátano, frutos rojos y leche.
Coconut Pineapple=Pineapple, banana and coconut milk.|Ананас, банан и кокосовое молоко.|Ananas, banană și lapte de cocos.|Ananas, banana e latte di cocco.|Piña, plátano y leche de coco.
Passion Élixir=Mango, passion fruit, pineapple and orange juice.|Манго, маракуйя, ананас и апельсиновый сок.|Mango, fructul pasiunii, ananas și suc de portocale.|Mango, frutto della passione, ananas e succo d’arancia.|Mango, maracuyá, piña y zumo de naranja.
Œufs au plat=Fried eggs, toast and salad.|Глазунья, тост и салат.|Ochiuri, toast și salată.|Uova al tegamino, toast e insalata.|Huevos fritos, tostada y ensalada.
Toast avocat-saumon=Toast topped with salmon, avocado, arugula and feta, served with salad.|Тост с лососем, авокадо, рукколой и фетой, подаётся с салатом.|Toast cu somon, avocado, rucola și feta, servit cu salată.|Toast con salmone, avocado, rucola e feta, servito con insalata.|Tostada con salmón, aguacate, rúcula y feta, acompañada de ensalada.
Galettes au fromage (syrniki maison)=Homemade patties made with drained, sweetened fromage blanc, served with red berry jam and crème fraîche.|Домашние сырники из подслащённого творога, подаются с джемом из красных ягод и сметаной (крем-фреш).|Turte de casă din brânză proaspătă scursă și îndulcită, servite cu gem de fructe de pădure și smântână (crème fraîche).|Frittelle fatte in casa a base di fromage blanc scolato e zuccherato, servite con confettura di frutti rossi e crème fraîche.|Tortitas caseras a base de queso fresco escurrido y azucarado, servidas con mermelada de frutos rojos y crème fraîche.
Greek Yogurt & Fruit Bowl=Greek yogurt, fresh fruit, granola, honey and chia seeds.|Греческий йогурт, свежие фрукты, гранола, мёд и семена чиа.|Iaurt grecesc, fructe proaspete, granola, miere și semințe de chia.|Yogurt greco, frutta fresca, granola, miele e semi di chia.|Yogur griego, fruta fresca, granola, miel y semillas de chía.
Infusion=Flavors of your choice: bergamot, jasmine or red fruits.|Вкусы на выбор: бергамот, жасмин или красные ягоды.|Arome la alegere: bergamotă, iasomie sau fructe roșii.|Gusti a scelta: bergamotto, gelsomino o frutti rossi.|Sabores a elegir: bergamota, jazmín o frutos rojos.
@B=Flavors of your choice: strawberry or coconut (+ 0,50 €).|Аромат на выбор: клубника или кокос (+ 0,50 €).|Arome la alegere: căpșuni sau cocos (+ 0,50 €).|Aromi a scelta: fragola o cocco (+ 0,50 €).|Aromas a elegir: fresa o coco (+ 0,50 €).
Matcha Glacé=@B
Ube Glacé=@B
Dirty Matcha Glacé=@B
Dirty Ube Glacé=@B
Lait végétal=Oat, almond or coconut.|Овсяное, миндальное или кокосовое.|De ovăz, de migdale sau de cocos.|Avena, mandorla o cocco.|Avena, almendra o coco.
Arômes=Caramel, vanilla, hazelnut or cookie.|Карамель, ваниль, фундук или печенье.|Caramel, vanilie, alune de pădure sau cookie.|Caramello, vaniglia, nocciola o cookie.|Caramelo, vainilla, avellana o cookie.
Limonade Passion=Passion fruit syrup, lemon juice, mint, lime and sparkling water.|Сироп маракуйи, лимонный сок, мята, лайм и газированная вода.|Sirop de fructul pasiunii, suc de lămâie, mentă, lime și apă minerală.|Sciroppo di frutto della passione, succo di limone, menta, lime e acqua frizzante.|Sirope de maracuyá, zumo de limón, menta, lima y agua con gas.`).split('\n').forEach(function(l){var i=l.indexOf('=');if(i>0)D[l.slice(0,i)]=l.slice(i+1)});
var XT=['Brunch','Toasts & salades','Plats'];
function secs(k,pr){var ex=null;MENU.Plats.forEach(function(s){if(s[0]==='Suppléments')ex=s});var o=MENU[k].filter(function(s){return s[0]!=='Suppléments'});if(ex&&(pr?k==='Plats':XT.indexOf(k)>-1))o.push(ex);return o}
function dsc(n,d){if(!li||!d)return d;var v=D[n];if(!v)return d;if(v.charAt(0)==='@')v=D[v];return v.split('|')[li-1]||d}
function rows(k,pr){return secs(k,pr).map(function(s){return '<h4 class="sec">'+tr(s[0])+'</h4>'+(s[1]?'<p class="sec sn">'+tr(s[1])+'</p>':'')+s[2].split('\n').filter(Boolean).map(function(l){var p=l.split('|');return '<div class="item"><div><h3>'+tr(p[0])+'</h3>'+(p[1]?'<p>'+dsc(p[0],p[1])+'</p>':'')+'</div><div class="price">'+p[2]+' €</div></div>'}).join('')}).join('')}

var tabs=document.getElementById('tabs'),items=document.getElementById('items'),sel=document.getElementById('lang');
function show(k){
  cur=k;
  Array.prototype.forEach.call(tabs.children,function(b){b.setAttribute('aria-selected',b.dataset.k===k)});
  items.innerHTML=rows(k);
}
function drawTabs(){
  tabs.innerHTML='';
  Object.keys(MENU).forEach(function(k){
    var b=document.createElement('button');b.type='button';b.textContent=tr(k);b.dataset.k=k;b.setAttribute('role','tab');
    b.onclick=function(){show(k)};tabs.appendChild(b);
  });
}
function setLang(c){
  li=LANGS.indexOf(c);if(li<0)li=0;
  document.documentElement.lang=LANGS[li];sel.value=LANGS[li];
  Array.prototype.forEach.call(document.querySelectorAll('[data-t]'),function(e){e.textContent=UI[e.dataset.t][li]});
  drawTabs();show(cur);
  document.getElementById('printmenu').innerHTML=Object.keys(MENU).map(function(k){return '<h3 class="pc">'+tr(k)+'</h3><div class="items">'+rows(k,1)+'</div>'}).join('');
  document.getElementById('msg').className='';
  try{localStorage.setItem('lang',LANGS[li])}catch(e){}
}
sel.onchange=function(){setLang(sel.value)};
var saved='fr';try{saved=localStorage.getItem('lang')||'fr'}catch(e){}
/* PDF menu: on a normal website the link downloads the file; inside the claude.ai preview the viewer's save dialog is used */
(function(){var a=document.getElementById('dl');
a.addEventListener('click',function(e){
  if(!(window.claude&&window.claude.use))return;
  e.preventDefault();
  window.claude.use('downloads').then(function(dl){
    if(!dl||a.href.indexOf('data:application/pdf;base64,')!==0){window.open(a.href,'_blank');return}
    var bin=atob(a.href.split(',')[1]),u=new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
    return dl.save({filename:'Amazonica-Brunch-Menu.pdf',data:u});
  }).catch(function(){});
});})();

var tm=document.getElementById('time');

var d=document.getElementById('date'),t=new Date();
function parisNow(){var p={};new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Paris',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).forEach(function(x){p[x.type]=x.value});return{date:p.year+'-'+p.month+'-'+p.day,min:(+p.hour%24)*60+(+p.minute)+(+p.second)/60}}
function buildTimes(){
  var n=parisNow(),prev=tm.value,v=d.value,any=false;d.min=n.date;
  if(v&&v<n.date){d.value=n.date;v=n.date}
  tm.innerHTML='';
  for(var h=9;h<=16;h++){[0,30].forEach(function(m){if(h===16&&m)return;if(v===n.date&&h*60+m<n.min+90)return;var o=document.createElement('option');o.textContent=('0'+h).slice(-2)+':'+(m?'30':'00');tm.appendChild(o);any=true})}
  if(!any){var o=document.createElement('option');o.value='';o.disabled=true;o.selected=true;o.textContent=UI.noslots[li];tm.appendChild(o)}
  else if(prev)Array.prototype.forEach.call(tm.options,function(o){if(o.textContent===prev)tm.value=prev})
}
(function(){var n=parisNow();if(!d.value){var day=n.date;if(n.min+90>960){var x=new Date(n.date+'T12:00:00Z');x.setUTCDate(x.getUTCDate()+1);day=x.toISOString().slice(0,10)}d.value=day}buildTimes()})();
d.addEventListener('change',buildTimes);sel.addEventListener('change',buildTimes);
function tick(){if(document.activeElement!==tm&&document.activeElement!==d)buildTimes()}
setInterval(tick,30000);window.addEventListener('focus',tick);document.addEventListener('visibilitychange',tick);

document.getElementById('bf').addEventListener('submit',function(e){
  e.preventDefault();
  var chosen=tm.value;buildTimes();if(!tm.value||tm.value!==chosen||!d.value||d.value<d.min){return}
  var f=new FormData(e.target),g=function(k){return f.get(k)||''};
  var body=['Nom : '+g('name'),'Date : '+g('date'),'Heure : '+g('time'),'Personnes : '+g('guests'),'Téléphone : '+g('phone'),'Notes : '+g('notes'),'Langue : '+LANGS[li]].join('\n');
  var m=document.getElementById('msg');
  
  document.getElementById('sdwa').href='https://wa.me/'+WA+'?text='+encodeURIComponent(body);
  document.getElementById('sd').showModal();
});

var tiles=document.querySelectorAll('.ph'),dlg=document.getElementById('lb'),big=document.getElementById('lbimg'),pc=0;
function openPhoto(i){
  pc=(i+tiles.length)%tiles.length;var tl=tiles[pc],im=tl.querySelector('img');
  if(im){big.style.cssText='width:auto;aspect-ratio:auto;border:0;padding:0;background:none';var c=document.createElement('img');c.src=im.src;c.alt=im.alt;c.draggable=false;big.innerHTML='';big.appendChild(c)}
  else{var cs=getComputedStyle(tl);big.style.backgroundImage=cs.backgroundImage;big.style.color=cs.color;big.textContent=tl.textContent}
  if(!dlg.open)dlg.showModal();
}
Array.prototype.forEach.call(tiles,function(x,i){x.onclick=function(){openPhoto(i)}});
document.getElementById('lbprev').onclick=function(){openPhoto(pc-1)};
document.getElementById('lbnext').onclick=function(){openPhoto(pc+1)};
document.getElementById('lbclose').onclick=function(){dlg.close()};
var tx=0,ty=0;
dlg.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
dlg.addEventListener('touchend',function(e){var t=e.changedTouches[0],dx=t.clientX-tx,dy=t.clientY-ty;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)openPhoto(pc+(dx<0?1:-1))},{passive:true});
dlg.addEventListener('click',function(e){if(e.target===dlg||e.target.className==='lb')dlg.close()});
dlg.addEventListener('keydown',function(e){if(e.key==='ArrowRight')openPhoto(pc+1);if(e.key==='ArrowLeft')openPhoto(pc-1)});

var sd=document.getElementById('sd');
document.getElementById('sdclose').onclick=function(){sd.close()};
sd.addEventListener('click',function(e){if(e.target===sd||e.target.className==='lb')sd.close()});
['sdwa','sdcall'].forEach(function(i){document.getElementById(i).addEventListener('click',function(){setTimeout(function(){sd.close()},300)})});
setLang(saved);
var nv=document.querySelector('nav'),ly=0;
function setNavH(){document.documentElement.style.setProperty('--navh',nv.offsetHeight+'px')}
setNavH();window.addEventListener('resize',setNavH);window.addEventListener('load',setNavH);
sel.addEventListener('change',function(){setTimeout(setNavH,0)});
buildTimes();
window.addEventListener('scroll',function(){var y=window.scrollY,dy=y-ly;
  if(y<=8){nv.classList.remove('hide','solid');ly=y}
  else if(dy>3){if(document.activeElement!==sel)nv.classList.add('hide');ly=y}
  else if(dy<-3){nv.classList.remove('hide');nv.classList.add('solid');ly=y}
},{passive:true});
var ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
var ml=document.getElementById('maplink');
if(ml)ml.href=ios?'https://maps.apple/p/rQMa~hHxMas55T':'https://maps.app.goo.gl/NLW5nHRcU52TRk399';
var cd=document.getElementById('cd');
document.getElementById('cbtn').onclick=function(){cd.showModal()};
document.getElementById('cdclose').onclick=function(){cd.close()};
cd.addEventListener('click',function(e){if(e.target===cd||e.target.className==='lb')cd.close()});
document.getElementById('cdwa').href='https://wa.me/'+WA;
['cdcall','cdwa'].forEach(function(i){document.getElementById(i).addEventListener('click',function(){setTimeout(function(){cd.close()},300)})});
