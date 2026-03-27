/* script.js */
// IMPORTUJ LUB WKLEJ TUTAJ CAŁĄ LISTĘ
const quotes = [
    { text: "Wszystko można człowiekowi odebrać z wyjątkiem jednego: ostatniej z ludzkich swobód – swobody wyboru własnej postawy w każdych okolicznościach, swobody wyboru własnej drogi.", author: "Viktor Frankl" },
    { text: "Cierpienie przestaje być w pewien sposób cierpieniem w momencie, gdy odnajduje sens, taki jak sens poświęcenia.", author: "Viktor Frankl" },
    { text: "To, co nie zabija mnie, czyni mnie silniejszym.", author: "Friedrich Nietzsche" },
    { text: "Ten, kto ma 'dlaczego', dla którego żyje, może znieść prawie każde 'jak'.", author: "Friedrich Nietzsche" },
    { text: "Gdy nie jesteśmy już w stanie zmienić sytuacji, jesteśmy wyzwani do zmiany samych siebie.", author: "Viktor Frankl" },
    { text: "Pomiędzy bodźcem i reakcją jest przestrzeń. W tej przestrzeni leży nasza wolność i moc wyboru naszej odpowiedzi.", author: "Viktor Frankl" },
    { text: "Przeszkoda w działaniu wspomaga działanie. To, co stoi na drodze, staje się drogą.", author: "Marek Aureliusz" },
    { text: "Bądź jak skała, o którą fale wciąż uderzają. Ona stoi niewzruszona, a wokół niej cichnie wściekłość morza.", author: "Marek Aureliusz" },
    { text: "Jeśli boli cię jakaś rzecz zewnętrzna, to nie ona cię niepokoi, lecz twój sąd o niej.", author: "Marek Aureliusz" },
    { text: "Ogień jest próbą złota, przeciwności losem silnych ludzi.", author: "Seneka" },
    { text: "Nie ma bardziej nieszczęśliwego człowieka niż ten, którego nigdy nie spotkało nieszczęście, bo nie miał okazji, by się sprawdzić.", author: "Seneka" },
    { text: "Znoszenie prób ze spokojnym umysłem odbiera nieszczęściu jego siłę i ciężar.", author: "Seneka" },
    { text: "Stałe nieszczęście przynosi jedno błogosławieństwo: tych, których wciąż atakuje, w końcu hartuje.", author: "Seneka" },
    { text: "Los sprzyja tym, którzy są przygotowani, a nieszczęście jest okazją do cnoty.", author: "Seneka" },
    { text: "Nienormalna reakcja na nieszczęśliwą sytuację jest normalnym zachowaniem.", author: "Viktor Frankl" },
    { text: "Życie nigdy nie staje się nie do zniesienia przez okoliczności, a jedynie przez brak sensu i celu.", author: "Viktor Frankl" },
    { text: "Nie trzeba się wstydzić łez, bo one są świadectwem, że człowiek ma największą z odwag – odwagę cierpienia.", author: "Viktor Frankl" },
    { text: "Co ma dać światło, musi wytrzymać spalanie.", author: "Viktor Frankl" },
    { text: "Idź wyprostowany wśród tych co na kolanach, wśród odwróconych plecami i obalonych w proch.", author: "Zbigniew Herbert" },
    { text: "Bądź odważny gdy rozum zawodzi bądź odważny, w ostatecznym rachunku jedynie to się liczy.", author: "Zbigniew Herbert" },
    { text: "Prawda wcale nie leży pośrodku, a tam, gdzie leży.", author: "Władysław Bartoszewski" },
    { text: "Nie ma sytuacji bez wyjścia tam, gdzie jest człowiek, który posiada wolę walki i wytrwania.", author: "Władysław Bartoszewski" },
    { text: "Warto być uczciwym, choć nie zawsze się to opłaca. Opłaca się być nieuczciwym, ale nie warto.", author: "Władysław Bartoszewski" },
    { text: "Zło, ból, cierpienie są ceną za to, że jesteśmy sobą.", author: "Leszek Kołakowski" },
    { text: "Cóż, lepiej chyba balansować niepewnie na krawędzi otchłani, niż zamknąwszy oczy przeczyć jej obecności.", author: "Leszek Kołakowski" },
    { text: "Przetrwanie jest wszystkim.", author: "Rainer Maria Rilke" },
    { text: "Może wszystko, co straszne, jest w głębi bezbronne i oczekuje od nas pomocy.", author: "Rainer Maria Rilke" },
    { text: "Paradoksalnie nadzieja jest wszystkim, kiedy po ludzku nie mamy nic.", author: "Józef Tischner" },
    { text: "Losem człowieka jest: dać się pokonać nadziei. Ginie ten, kto przestaje jej ulegać.", author: "Józef Tischner" },
    { text: "W tysiącach udręk – istnieję. Jestem torturowany na łożu męki – ale istnieję! Choć siedzę samotnie w filarze – istnieję!", author: "Fiodor Dostojewski" },
    { text: "Gdyby nie było cierpienia, człowiek nie znałby swoich granic, nie znałby siebie.", author: "Lew Tołstoj" },
    { text: "Najtrudniejsza i najszczęśliwsza rzecz to kochać życie we własnych cierpieniach, cierpieniach bez winy.", author: "Lew Tołstoj" },
    { text: "Prawdziwy człowiek ujawnia się w trudnych czasach.", author: "Epiktet" },
    { text: "Większa trudność to więcej chwały w jej pokonaniu.", author: "Epiktet" },
    { text: "To nie wydarzenia nas niepokoją, ale nasze opinie o nich.", author: "Epiktet" },
    { text: "Każda trudność w życiu daje nam okazję do zwrócenia się do wewnątrz.", author: "Epiktet" },
    { text: "Są takie noce, przyjacielu, kiedy świat się kończy.", author: "Halina Poświatowska" },
    { text: "I chociaż nie wiemy, dlaczego tak jest, w tym ogromnym morzu beznadziejności należy zachowywać się godziwie.", author: "Olga Tokarczuk" },
    { text: "Jesteśmy tym, co wielokrotnie robimy. Doskonałość nie jest zatem aktem, lecz nawykiem.", author: "Arystoteles" },
    { text: "Wiedzieć to za mało, musimy to zastosować. Chcieć to za mało, musimy działać.", author: "Johann Wolfgang von Goethe" },
    { text: "To, co nie zostało zaczęte dzisiaj, nigdy nie zostanie ukończone jutro.", author: "Johann Wolfgang von Goethe" },
    { text: "Myśleć jest łatwo. Działać jest trudno.", author: "Johann Wolfgang von Goethe" },
    { text: "Szczęście to uczucie, że moc rośnie – że opór zostaje pokonany.", author: "Friedrich Nietzsche" },
    { text: "Życie jest tym, co musi wciąż siebie samego przezwyciężać.", author: "Friedrich Nietzsche" },
    { text: "Nikt nie zbuduje ci mostu, po którym tylko ty musisz przejść przez strumień życia.", author: "Friedrich Nietzsche" },
    { text: "Dyscyplina to wolność.", author: "Arystoteles" },
    { text: "Lepiej jest czynić dobro w taki sposób, że nikt o tym nic nie wie.", author: "Lew Tołstoj" },
    { text: "Odwaga zaczyna się od tego, że się pojawiasz i dajesz się zobaczyć.", author: "Brené Brown" },
    { text: "Możesz wybrać odwagę albo możesz wybrać komfort.", author: "Brené Brown" },
    { text: "Inteligent tym się różni od nieinteligenta, że nie obraża się o żarty.", author: "Władysław Bartoszewski" },
    { text: "Jak się ktoś urodził człowiekiem, to łatwiej mu jest być człowiekiem, niż stać się świnią.", author: "Władysław Bartoszewski" },
    { text: "Życie trudne, lecz nie nudne.", author: "Władysław Bartoszewski" },
    { text: "Kiedy coś uparcie gaśnie – zaufaj iskierce nadziei.", author: "Władysław Bartoszewski" },
    { text: "Kto ma Sprawę, dla której żyje, bardzo boi się umrzeć.", author: "Józef Tischner" },
    { text: "Każdy myśli o zmianie świata, ale nikt nie myśli o zmianie siebie.", author: "Lew Tołstoj" },
    { text: "Prawdziwe życie toczy się, gdy zachodzą drobne zmiany.", author: "Lew Tołstoj" },
    { text: "Jeśli szukasz perfekcji, nigdy nie będziesz zadowolony.", author: "Lew Tołstoj" },
    { text: "W imię Boga, zatrzymaj się na chwilę, przestań pracować.", author: "Lew Tołstoj" },
    { text: "Wolność nie jest dana, trzeba ją zdobywać każdego dnia na nowo.", author: "Halina Poświatowska" },
    { text: "Tyle wiemy o sobie, ile nas sprawdzono.", author: "Wisława Szymborska" },
    { text: "Nic dwa razy się nie zdarza i nie zdarzy.", author: "Wisława Szymborska" },
    { text: "Natchnienie rodzi się z bezustannego 'nie wiem'.", author: "Wisława Szymborska" },
    { text: "Nie ma wielkości tam, gdzie nie ma prostoty, dobroci i prawdy.", author: "Lew Tołstoj" },
    { text: "Nic nie jest warte więcej niż ten dzień.", author: "Johann Wolfgang von Goethe" },
    { text: "Naprawę świata należy zacząć od zamiatania przed własnymi drzwiami.", author: "Johann Wolfgang von Goethe" },
    { text: "Sztuka polega na tym, żeby nie umrzeć od prawdy.", author: "Friedrich Nietzsche" },
    { text: "Kto walczy z potworami, powinien uważać, by sam nie stał się potworem.", author: "Friedrich Nietzsche" },
    { text: "Nie poddaję się, bo życie jest cudem.", author: "Halina Poświatowska" },
    { text: "Osobliwy paradoks polega na tym, że kiedy akceptuję siebie dokładnie takim, jakim jestem, wtedy mogę się zmienić.", author: "Carl Rogers" },
    { text: "Jesteś niedoskonały, jesteś stworzony do walki, ale jesteś godzien miłości.", author: "Brené Brown" },
    { text: "Mów do siebie tak, jak mówiłbyś do kogoś, kogo kochasz.", author: "Brené Brown" },
    { text: "Prawdziwa przynależność nie wymaga od ciebie zmiany tego, kim jesteś.", author: "Brené Brown" },
    { text: "Niedoskonałości nie są brakami; są przypomnieniem, że wszyscy w tym uczestniczymy.", author: "Brené Brown" },
    { text: "Samowspółczucie to dawanie sobie tej samej życzliwości, którą ofiarowałbyś przyjacielowi.", author: "Kristin Neff" },
    { text: "To jest moment cierpienia. Cierpienie jest częścią życia.", author: "Kristin Neff" },
    { text: "Nasze sukcesy i porażki przychodzą i odchodzą – ani nas nie definiują.", author: "Kristin Neff" },
    { text: "Jedynym sposobem, aby uwolnić się od bólu, jest bycie z nim takim, jakim jest.", author: "Kristin Neff" },
    { text: "Kochać kogoś to kochać go takim, jaki jest.", author: "Lew Tołstoj" },
    { text: "Może dlatego wydaję ci się szczęśliwy, ponieważ cieszę się tym, co mam.", author: "Lew Tołstoj" },
    { text: "Kochać to dwie samotności, które spotykają się i nawzajem wspierają.", author: "Rainer Maria Rilke" },
    { text: "Trzeba być cierpliwym wobec wszystkiego, co nierozwiązane w twoim sercu.", author: "Rainer Maria Rilke" },
    { text: "Rzeczą naprawdę trudną jest rezygnacja z bycia idealnym.", author: "Anna Quindlen" },
    { text: "Przyzwoity człowiek sam lepiej żyje, bo nie cierpi duchowo.", author: "Leszek Kołakowski" },
    { text: "Możesz odejść ode mnie – ale sama sobie nie odejdę.", author: "Halina Poświatowska" },
    { text: "Tak czule wiążesz mi buty, żebym nie upadła.", author: "Halina Poświatowska" },
    { text: "Cierpienie człowieka łatwiej jest mi znieść niż cierpienie zwierzęcia.", author: "Olga Tokarczuk" },
    { text: "Czułość jest sztuką współodczuwania.", author: "Olga Tokarczuk" },
    { text: "Musisz być sobą, bo jeśli będziesz kimś innym, to zbawią tego innego.", author: "Józef Tischner" },
    { text: "Miłość nie rozgrzesza człowieka, ale przekonuje Pana Boga.", author: "Józef Tischner" },
    { text: "Bóg nas znalazł, zanim my znaleźliśmy Boga.", author: "Józef Tischner" },
    { text: "Nie wydawaj wyroku, zanim nie wysłuchasz przeciwnej strony.", author: "Eurypides" },
    { text: "Raczej siebie oskarżajmy, a nie innych.", author: "Józef Tischner" },
    { text: "Inni nie mogą nam zabrać naszego szacunku dla siebie, jeśli im go nie oddamy.", author: "Autor nieznany" },
    { text: "Łatwo jest zobaczyć wady innych, ale trudno jest ujrzeć swoje.", author: "Budda" },
    { text: "Poczucie własnej wartości to prawo narodzin.", author: "Brené Brown" },
    { text: "To, że nie kochasz, nie znaczy, że nie ma w tobie miłości.", author: "Lew Tołstoj" },
    { text: "Nie możesz zatrzymać fal, ale możesz nauczyć się surfować.", author: "Jon Kabat-Zinn" },
    { text: "Chwila obecna jest jedyną chwilą, jaką kiedykolwiek mamy.", author: "Jon Kabat-Zinn" },
    { text: "Dopóki oddychasz, jest w tobie więcej rzeczy dobrych niż złych.", author: "Jon Kabat-Zinn" },
    { text: "Pij herbatę powoli i z nabożeństwem.", author: "Thich Nhat Hanh" },
    { text: "Oddech jest mostem, który łączy życie ze świadomością.", author: "Thich Nhat Hanh" },
    { text: "Najcenniejszym darem, jaki możemy ofiarować innym, jest nasza obecność.", author: "Thich Nhat Hanh" },
    { text: "Nie idź za przeszłością, nie zgub się w przyszłości.", author: "Budda" },
    { text: "Czułość sprawia, że imbryk zaczyna mówić.", author: "Olga Tokarczuk" },
    { text: "Czułość jest najskromniejszą odmianą miłości.", author: "Olga Tokarczuk" },
    { text: "Prawdziwa podróż odkrywcza polega na posiadaniu nowych oczu.", author: "Marcel Proust" },
    { text: "Żyjemy dłużej, ale mniej dokładnie.", author: "Wisława Szymborska" },
    { text: "Umieć milczeć to prawie tyle, co zachować siebie na własność.", author: "Rainer Maria Rilke" },
    { text: "Uczę się patrzeć.", author: "Rainer Maria Rilke" },
    { text: "Moje szczęście to wieczór z książką i filiżanką herbaty.", author: "Halina Poświatowska" },
    { text: "Nie umiem żyć w pośpiechu. Mój świat to skóra jabłka.", author: "Halina Poświatowska" },
    { text: "Kiedy jestem blisko, nie pytaj — przytul.", author: "Halina Poświatowska" },
    { text: "Cisza rozdziela bardziej niż przestrzeń.", author: "Halina Poświatowska" },
    { text: "Przestrzenią człowiekowi najbliższą jest dom.", author: "Józef Tischner" },
    { text: "Złudzenia są naszą radością i naszym cierpieniem.", author: "Józef Tischner" },
    { text: "Żeby był dialog, trzeba dwóch rzeczy: najpierw uszu, a potem ust.", author: "Józef Tischner" },
    { text: "Świat jest dla człowieka zbyt duży.", author: "Olga Tokarczuk" },
    { text: "Wierzę, że nasze życie jest skomplikowanym splotem sensów.", author: "Olga Tokarczuk" },
    { text: "Poezja to rozmowa z niewidzialnym.", author: "Wisława Szymborska" },
    { text: "Kiedy wymawiam słowo Przyszłość, pierwsza sylaba odchodzi do przeszłości.", author: "Wisława Szymborska" },
    { text: "Warto być uczciwym, choć nie zawsze się to opłaca.", author: "Władysław Bartoszewski" },
    { text: "Czuwaj – kiedy światło na górach daje znak – wstań i idź.", author: "Zbigniew Herbert" }
];
let currentQuote = null;

// GŁÓWNA LOGIKA STEROWANIA
window.draw = () => {
    const pageThought = document.getElementById('page-thought');
    const quoteDisplay = document.getElementById('quote-display');
    const authorDisplay = document.getElementById('author-display');
    const favBtn = document.getElementById('fav-btn');

    // 1. Losuj
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // 2. Wypełnij i przełącz stan
    quoteDisplay.innerText = `„${currentQuote.text}”`;
    authorDisplay.innerText = currentQuote.author;
    
    pageThought.classList.add('has-quote'); // Przełącza widoczność z instrukcji na cytat

    // 3. Sprawdź czy jest już w ulubionych
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    if(favs.find(f => f.text === currentQuote.text)) {
        favBtn.classList.add('active');
    } else {
        favBtn.classList.remove('active');
    }
};

window.showPage = (id) => {
    // Nawigacja
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`page-${id}`).classList.add('active');
    document.getElementById(`nav-${id}`).classList.add('active');
    
    // Renderowanie list
    if(id === 'favorites') renderFavs();
    if(id === 'journal') renderJournal();
};

window.saveReflection = () => {
    const text = document.getElementById('ref-input').value;
    if(!text || !currentQuote) return alert("Wylosuj najpierw myśl i wpisz refleksję.");
    
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.unshift({ date: new Date().toLocaleDateString(), quote: currentQuote.text, note: text });
    localStorage.setItem('logs', JSON.stringify(logs));
    
    document.getElementById('ref-input').value = '';
    alert("Zapisano w dzienniku!");
};

window.toggleFavorite = () => {
    if(!currentQuote) return;
    const favBtn = document.getElementById('fav-btn');
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    
    const existingIndex = favs.findIndex(f => f.text === currentQuote.text);

    if(existingIndex > -1) {
        favs.splice(existingIndex, 1);
        favBtn.classList.remove('active');
    } else {
        favs.push(currentQuote);
        favBtn.classList.add('active');
    }
    
    localStorage.setItem('favs', JSON.stringify(favs));
};

function renderFavs() {
    const list = document.getElementById('favs-list');
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    
    list.innerHTML = favs.length ? favs.map((f, index) => `
        <div class="fav-item">
            <div class="fav-author">${f.author}:</div>
            <div class="fav-quote">„${f.text}”</div>
            <button class="item-delete-btn" onclick="deleteFav(${index})">
                <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>
    `).join('') : '<p class="instruction-text">Brak ulubionych.</p>';
}

function renderJournal() {
    const list = document.getElementById('journal-list');
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    
    list.innerHTML = logs.length ? logs.map((l, index) => `
        <div class="log-item">
            <div class="log-date">${l.date}</div>
            <div class="log-quote">"${l.quote}"</div>
            <div class="log-note">Refleksja: ${l.note}</div>
            <button class="item-delete-btn" onclick="deleteLog(${index})">
                 <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>
    `).join('') : '<p class="instruction-text">Dziennik jest pusty.</p>';
}

// Funkcje usuwania
window.deleteFav = (index) => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    favs.splice(index, 1);
    localStorage.setItem('favs', JSON.stringify(favs));
    renderFavs();
}

window.deleteLog = (index) => {
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.splice(index, 1);
    localStorage.setItem('logs', JSON.stringify(logs));
    renderJournal();
}
