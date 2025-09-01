// This is the final, complete list of all 73 milestone events.
const timelineData = [
    { year: "1995", title: "Formation of Suzlon Energy Limited", description: "Formation of Suzlon Energy Limited", imageId: 1 },
    { year: "1996", title: "First WTG Commissioned", description: "Suzlon commissions its first 0.27 MW Wind Turbine for M/s Indian Petro Chemicals Limited at Site : Dhank ( Gujarat).", imageId: 2 },
    { year: "1997", title: "First Manufacturing Facility Certified", description: "Suzlon’s first WTG manufacturing facility in Daman, certified by Det Norske Veritas", imageId: 3 },
    { year: "1999", title: "Debut Entry in Tamil Nadu", description: "Suzlon makes its debut entry in Tamil Nadu by commissioning its first Wind Turbine in Tamil Nadu.", imageId: 4 },
    { year: "1999", title: "First Order in Maharashtra", description: "Suzlon bags its first order of Ghodawat Pan Masala Products in the state of Maharashtra.", imageId: 5 },
    { year: "2000", title: "First 50 MW Commissioned", description: "Suzlon commissions its first 50 MW at Site : Vankhusavade, Dist :Satara . Maharashtra", imageId: 6 },
    { year: "2000", title: "Bajaj Auto Contract", description: "Suzlon is awarded the prestigious contract of Bajaj Auto Limited - a turnkey Wind Farm Project in Maharashtra.", imageId: 7 },
    { year: "2000", title: "Tata Finance Contract", description: "Suzlon is awarded the prestigious contract of Tata Finance Limited - a turnkey Wind Farm Project in Maharashtra.", imageId: 8 },
    { year: "2001", title: "First 1 MW WTG Commissioned", description: "Suzlon's first 1 MW Wind Turbine Generator is commissioned for M/s Niskalp Investments , a Tata Group Company.", imageId: 9 },
    { year: "2001", title: "Inception of AE Rotor Techniek B.V.", description: "Inception of AE Rotor Techniek B.V.(AERT) ; whose holding company AE Rotor Holding B.V is a wholly owned subsidiary of Suzlon Energy Limited.", imageId: 10 },
    { year: "2001", title: "Maiden Presence in Rajasthan", description: "Suzlon heralds its maiden presence in Rajasthan by commissioning its first 0.35 MW for Rajasthan State Mines & Minerals , a Govt. of Rajasthan undertaking.", imageId: 11 },
    { year: "2002", title: "Formation of Suzlon Energy Gmbh, Germany", description: "Formation of Suzlon Energy Gmbh ; Germany ; a wholly owned subsidiary of Suzlon Energy Limited, India.", imageId: 12 },
    { year: "2002", title: "Operations Commence in USA", description: "Formation & commencent of operations of Suzlon Wind Energy Corp , USA a wholly owned subsidiary of Suzlon Energy Limited , India.", imageId: 13 },
    { year: "2002", title: "First S-60 Blades Dispatched", description: "Dispatch of first set of Blades Type S-60 from Rotor Blade Unit, Daman.", imageId: 14 },
    { year: "2003", title: "First 1.25 MW WTG Commissioned", description: "Suzlon commissions its first 1.25 MW WTG for M/s Velathal Spinning Mills Limited in Tamil Nadu", imageId: 15 },
    { year: "2003", title: "Vankusawade Becomes Asia's Largest Wind Park", description: "Maharashtra's Vankusawade Wind Park becomes Asia's largest", imageId: 16 },
    { year: "2003", title: "First Export Order to USA", description: "The first Export Order to U.S.A is flagged off by Mrs Jaywantiben , Honb'le Minister of Power at Daman.", imageId: 17 },
    { year: "2004", title: "Entry into China", description: "Entry in China : Suzlon Energy Limited opens its Representative office in Beijing.", imageId: 18 },
    { year: "2004", title: "Operations Commence in Australia", description: "Formation & commencent of operations of Suzlon Energy Australia Pty Ltd. Australia a wholly owned subsidiary of Suzlon Energy Limited , India.", imageId: 19 },
    { year: "2004", title: "100 Sets of Blade - AE31 Produced", description: "Production of first 100 sets of Blade - AE31 by Rotor Blade Unit (Daman) of Suzlon Energy Limited.", imageId: 20 },
    { year: "2004", title: "Maiden Imprint in Karnataka", description: "Suzlon sets its maiden imprint in the state of Karnataka by commissioning 3.75 MW Wind Power Project for MSPL , a major mining company.", imageId: 21 },
    { year: "2005", title: "1000 MW Installation Mark Crossed", description: "Suzlon crosses the 1000 MW installation mark.", imageId: 22 },
    { year: "2005", title: "First 2 MW WTG Commissioned", description: "Suzlon dedicates its one of its kind 2 MW Wind Turbine Generator to the nation after its sucessful commissioning on the eve of Independence Day", imageId: 23 },
    { year: "2005", title: "Formation of Suzlon Control System (SCS)", description: "Formation and commencment of Suzlon Control System (SCS) a MBU under SEL at Daman, India.This is a major backward integration initiative undertaken by Suzlon for the Design & Manufacturing of Wind Turbine Control Systems.", imageId: 24 },
    { year: "2005", title: "Formation of Suzlon Generators Pvt Ltd", description: "Formation of Suzlon Generators Pvt Ltd which will be the production unit for manufacturing Wind Electric Generators.", imageId: 25 },
    { year: "2005", title: "Formation of Suzlon Energy A/S, Denmark", description: "Formation of Suzlon Energy A/S , Denmark a wholly owned subsidiary of Suzlon Energy Limited , India", imageId: 26 },
    { year: "2005", title: "Formation of Suzlon Structures Pvt Ltd", description: "Formation of Suzlon Structures Pvt Ltd which will be the production unit for manufacturing Tubular Towers.", imageId: 27 },
    { year: "2005", title: "Maiden Imprint in M.P", description: "Suzlon sets its maiden imprint in the state of M.P by commissioning 5.0 MW Wind Power Project.", imageId: 28 },
    { year: "2006", title: "Incorporation of Suzlon Rotor Corporation, USA", description: "Date of incorporation of Suzlon Rotor Corporation, USA.", imageId: 29 },
    { year: "2006", title: "Formation of Suzlon Transformers", description: "Formation and commencment of Suzlon Transformers a MBU under SISL at Halol, near Baroda ( India ) This is a major backward integration initiative undertaken by Suzlon for the Design & Manufacturing of Transformers.", imageId: 30 },
    { year: "2006", title: "Acquisition of Hansen Transmissions", description: "Suzlon announces the strategic acquisition of Hansen Transmission International NV, Belgium one of the worlds largest wind energy & industrial Gearbox manufacturer through its subsidiary Rotor Holding B.V. Truly trailblazing for the fact that this was the second largest foreign acquisition by an Indian Company.", imageId: 31 },
    { year: "2006", title: "Ranked #5 globally", description: "Suzlon ranked #5 among WTG manufacturers in terms of capacity installed in 2005, capturing 6.1% of the Global market - source BTM Consult ApS.", imageId: 32 },
    { year: "2006", title: "Successful IPO", description: "Suzlon Energy Limited opens its Intial Public Offer (IPO) for 29.34 million shares. The issue closed on 29 Sep 2005 with an overwhelming oversubscription and was sucessfully listed on the BSE & NSE.", imageId: 33 },
    { year: "2006", title: "Inception of Tianjin Manufacturing Facility", description: "Inception date of Tianjin Manufacturing Facility in China.", imageId: 34 },
    { year: "2006", title: "First Community-Owned Windmill", description: "Suzlon commissioned the first community-owned windmill in India for Odanthurai Panchayaat in Coimbatore District, Tamilnadu The turbine was of 350 KW make and was commissioned on 31st March 2006 ( location No 827)", imageId: 35 },
    { year: "2007", title: "2 GW Installation Mark Crossed in India", description: "Suzlon crosses the 2 GW installation mark in India.", imageId: 36 },
    { year: "2007", title: "Entry into European Market", description: "Suzlon breaks through to the World's largest Wind Market - enters the European market by bagging the Portugal Order & signing the contract for 39.9 MW Wind Turbine Capacity with TECNEIRA - Tecnologias Energeticas,SA in the Penamacor region of Portugal.", imageId: 37 },
    { year: "2007", title: "Formation of Suzlon Energy Forge Limited", description: "Formation of Suzlon Energy Forge Limited, which would cater to the foundary and forging of hub casts and other allied components.Operations will commence in late July 2008 with facilities at Coimbatore and Vadodara.", imageId: 38 },
    { year: "2007", title: "Asia’s First Rotor Blade Test Facility", description: "The ground breaking ceremony of Asia’s first Rotor Blade Test facility is held at Vadodara, Gujarat. There are only two such facilities in existence in the world today, the first at the TU-Delft University, Netherlands and another at NREL, USA. The facility, with a planned investment of INR 30 crores will be established with technical collaboration with Knowledge Center WMC, a unit of the TU-Delft University.", imageId: 39 },
    { year: "2007", title: "British Petroleum Contract", description: "Suzlon signs the turnkey contract with British Petroleum for setting up a 40 MW Wind Power Project in Maharashtra wherby becoming the only Indian manufacturer to attract Foreign Direct Investment in the Indian Wind Energy Sector.", imageId: 40 },
    { year: "2007", title: "Australia's Largest Wind Farm Project", description: "Suzlon made its maiden foray in Australia by signing the contract to build Australia's largest Wind Farm Project for Australia Gas & Light (AGL)Company through its subsidiary Suzlon Energy Australia Pty Limited(SEA)", imageId: 41 },
    { year: "2007", title: "Italian Order Secured", description: "The European spree continues with an Italian Order. Suzlon signs an important EPC contract for the 21 MW Martignano Project with Maestrale Green Energy of Italy. This Project would comprise of 10 units of Suzlon S88 - 2.1 MW Turbine.", imageId: 42 },
    { year: "2007", title: "First 2.1 MW Turbine in Australia", description: "Suzlon commissions its first 2.1 MW capacity turbine, the V3 S88 test turbine installation, in Australia", imageId: 43 },
    { year: "2007", title: "Acquisition of REPOWER", description: "Suzlon acquires global offshore giant REPOWER as an important strategic asset", imageId: 44 },
    { year: "2008", title: "Harvard Business School Case Study", description: "The globally renowned Harvard Business School concludes a case study labelled 'The Suzlon edge' which describes and analyzes Suzlon's evolution and the business decisions & strategies that has catapulted Suzlon to one of the leading players in the Global wind energy arena.", imageId: 45 },
    { year: "2008", title: "3 GW Installations in India", description: "Suzlon crosses 3 GW of installations in India", imageId: 46 },
    { year: "2009", title: "First WTG with Concrete Tower Technology", description: "Suzlon commissions its first Wind Turbine Generator (WTG) using Concrete Tower Technology. The Turbine bearing location T3 of 600 Kw make is located at Nani Sindholi , Kutch Region, Gujarat and was commissioned for Suzlon Towers & Structures Limited.", imageId: 47 },
    { year: "2009", title: "MoU with TERI University", description: "Suzlon Energy Limited entered into a Memorandum of Understanding (MoU) with TERI University for setting up and offering an M Tech Programme in Renewable Energy Engineering and Management.", imageId: 48 },
    { year: "2009", title: "Maiden WTG Commissioning in Nicaragua", description: "Maiden WTG commissioning in Nicaragua . Suzlon commissions its first turbine in Nicaragua (out of a total of 19 turbines of type S88-2.1 MW 50Hz V3 ) at the Amayo site, in Rivas province, Nicaragua for Arctas Capital Group LP ( Lead developer – 45% stake).", imageId: 49 },
    { year: "2009", title: "Breakthrough into Sri Lankan Market", description: "Suzlon made a breakthrough into the Sri Lankan wind energy market by inking a deal with Senok Wind Power Pvt. Ltd to supply eight units of Suzlon’s S64 – 1.25 MW wind turbines.", imageId: 50 },
    { year: "2009", title: "Maiden WTG Commissioning in Spain", description: "Maiden WTG commissioning in Spain. Suzlon commissions its first turbine in Spain (out of a total of 22 turbines of type S88-2.1 MW 50Hz V3 ) at the Jerez site, in Cádiz province, Spain for Wigep Andalucia S.A..", imageId: 51 },
    { year: "2010", title: "Maiden Presence in Balkan Region", description: "Suzlon announces its maiden presence in the Balkan region by inking an order in Bulgaria. This order has been secured from Technomash Bulgarian Industrial Group AD and comprises of 06 units of Suzlon’s S88 – 2.1 MW turbine.", imageId: 52 },
    { year: "2010", title: "Maiden Presence in Scandanavian Region", description: "Suzlon announces its maiden presence in the Scandanavian region by inking an order in Sweden. The order from Triventus AB comprises of two S88-2.1 MW wind turbines.", imageId: 53 },
    { year: "2010", title: "Maiden WTG Commissioning in Turkey", description: "Maiden WTG commissioning in Turkey . Suzlon commissions its first turbine in Turkey (out of a total of 15 turbines of type S88-2.1 MW 50Hz V3 ) at the Akbük site, in Aydın/Didim province, Turkey for AYEN ENERJI CO. INC.", imageId: 54 },
    { year: "2010", title: "First Investment from Nationalised Bank", description: "Suzlon sets a benchmark by becoming the first company in India to bring investment from a nationalised bank into the wind energy sector when it led the maiden foray of State Bank of India for 15 MW WPPs.", imageId: 55 },
    { year: "2010", title: "Ranked #3 Globally", description: "Suzlon was ranked #3 among WTG manufacturers in terms of capacity installed in 2010*", imageId: 56 },
    { year: "2011", title: "2 GW Installation Mark in US", description: "Suzlon crosses the 2 GW installation mark in the US market", imageId: 57 },
    { year: "2011", title: "'One Earth' HQ receives LEED Platinum award", description: "Suzlon global headquarters 'One Earth' receives the coveted Leadership in Energy and Environment Design (LEED) Platinum award.", imageId: 58 },
    { year: "2011", title: "6 GW Installation Mark in India", description: "Suzlon crosses the 6 GW installation mark in India", imageId: 59 },
    { year: "2012", title: "Maiden Commissioning in Canada", description: "Suzlon Energy commences its maiden commissioning of its Amherst Project in Nova Scotia, Canada. This Canadian Project deploys Suzlon latest S9X product series.", imageId: 60 },
    { year: "2012", title: "Maiden Commissioning in Romania", description: "Suzlon's commences its maiden Project commissioning in Romania for Martifer Renewables . Four WTGs, each of rated capacity - 2100 KW are commissioned at site Badabag ( Tulcea province ) - Romania", imageId: 61 },
    { year: "2014", title: "Kutch becomes Asia's largest wind park", description: "Kutch becomes Asia's largest wind park at 1,100 MW", imageId: 62 },
    { year: "2014", title: "First Hybrid Tower at 120m", description: "Suzlon erects its first S97-2.1MW WTG, built with a hybrid tower (including lattice/tubular combination) at 120 m hub height in Jamanwada, Gujarat", imageId: 63 },
    { year: "2015", title: "10,000th WTG Commissioned", description: "Suzlon commissioned its 10,000th WTG at the Artilleros wind farm in Uruguay", imageId: 64 },
    { year: "2017", title: "First Wind Farm achieves 20 years operation", description: "Suzlon’s first wind farm achieves an operational milestone of 20 years.", imageId: 65 },
    { year: "2017", title: "11 GW Installed Wind Energy in India", description: "Suzlon surpasses the milestone of 11 GW installed wind energy in India", imageId: 66 },
    { year: "2018", title: "New S128 WTG Installed", description: "Suzlon installed and commissioned the new S128; the largest Wind Turbine Generator (WTG) in India. The first prototype of S128 has been commissioned at Sanganeri, in Tamil Nadu.", imageId: 67 },
    { year: "2018", title: "First Offshore Met Station Commissioned", description: "Suzlon and associates commissioned the first Operational Offshore Met Station in the Arabian Sea in Gujarat. The met station will collect wind data for a period of two years.", imageId: 68 },
    { year: "2023", title: "20 GW Worldwide Installations", description: "Becomes the first Indian wind energy company to reach 20 GW of worldwide wind energy installations.", imageId: 69 },
    { year: "2023", title: "Successful QIP & Net Debt Free", description: "Completion of a successful QIP of Rs. 2,000 crores with oversubscription by 2.3x, resulting in company becoming net debt free.", imageId: 70 },
    { year: "2023", title: "Launch of S144, 3 MW Series", description: "Launch of S144, 3 MW series wind turbine technology platform, one of the largest wind turbines in India, extendable up to 3.15 MW.", imageId: 71 },
    { year: "2024", title: "India's Largest Wind Energy Order", description: "Suzlon Announces India's Largest Wind Energy Order of 1,166 MW from NTPC Green Energy Limited", imageId: 72 },
    { year: "2024", title: "Acquisition of Renom Energy Services", description: "Suzlon Group acquires Renom Energy Services Private Limited, India’s largest multi-brand OMS provider", imageId: 73 }
];

// This function builds the timeline from the data above
function buildTimeline() {
    const mainContainer = document.getElementById('timeline-container');
    mainContainer.innerHTML = '';

    const groupedBy5Year = timelineData.reduce((acc, event) => {
        const groupStartYear = Math.floor(parseInt(event.year.substring(0, 4)) / 5) * 5;
        if (!acc[groupStartYear]) {
            acc[groupStartYear] = [];
        }
        acc[groupStartYear].push(event);
        return acc;
    }, {});

    let bgCounter = 1;
    
    for (const groupYear in groupedBy5Year) {
        const eventsIn5YearBlock = groupedBy5Year[groupYear];
        const groupStartYear = parseInt(groupYear);
        const groupEndYear = groupStartYear + 4;

        const groupWrapper = document.createElement('div');
        groupWrapper.className = 'timeline-group-wrapper';
        if (bgCounter % 2 === 0) {
            groupWrapper.classList.add('group-reversed');
        }

        const stickyBackground = document.createElement('div');
        stickyBackground.className = 'sticky-background';
        const bgImage = document.createElement('img');
        bgImage.src = `images/BG${bgCounter}.jpg`;
        bgImage.alt = `Background for ${groupStartYear} - ${groupEndYear}`;
        stickyBackground.appendChild(bgImage);
        bgCounter++;

        const contentContainer = document.createElement('div');
        contentContainer.className = 'group-content';

        const header = document.createElement('div');
        header.className = 'timeline-group-header';
        header.innerText = `${groupStartYear} - ${groupEndYear}`;
        contentContainer.appendChild(header);

        const eventsGroupedByYear = eventsIn5YearBlock.reduce((acc, event) => {
            if (!acc[event.year]) {
                acc[event.year] = [];
            }
            acc[event.year].push(event);
            return acc;
        }, {});

        for (const year in eventsGroupedByYear) {
            const events = eventsGroupedByYear[year];
            if (events.length > 2) {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'timeline-item';
                carouselItem.innerHTML = createCarouselHTML(events, year);
                contentContainer.appendChild(carouselItem);
            } else {
                events.forEach(event => {
                    const timelineItem = document.createElement('div');
                    timelineItem.className = 'timeline-item';
                    timelineItem.innerHTML = createTimelineCardHTML(event);
                    contentContainer.appendChild(timelineItem);
                });
            }
        }

        groupWrapper.appendChild(stickyBackground);
        groupWrapper.appendChild(contentContainer);
        mainContainer.appendChild(groupWrapper);
    }
    initializeCarousels();
}

function createTimelineCardHTML(event) {
    return `
        <div class="timeline-content">
            <div class="year">${event.year}</div>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <img src="images/${event.imageId}.jpg" alt="${event.title}" class="milestone-image">
        </div>`;
}

function createCarouselHTML(events, year) {
    let slidesHTML = '';
    events.forEach(event => {
        slidesHTML += `<div class="carousel-slide">${createTimelineCardHTML(event)}</div>`;
    });

    return `
        <div class="milestone-carousel" data-total="${events.length}">
            <div class="carousel-viewport">
                <div class="carousel-slides-container">
                    ${slidesHTML}
                </div>
            </div>
            <div class="carousel-nav">
                <button class="carousel-btn prev" disabled>&larr;</button>
                <span class="carousel-counter">1 / ${events.length}</span>
                <button class="carousel-btn next">&rarr;</button>
            </div>
        </div>
    `;
}

function initializeCarousels() {
    const carousels = document.querySelectorAll('.milestone-carousel');
    carousels.forEach(carousel => {
        let currentIndex = 0;
        const totalSlides = parseInt(carousel.dataset.total);
        const slidesContainer = carousel.querySelector('.carousel-slides-container');
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        const counter = carousel.querySelector('.carousel-counter');

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        function updateCarousel() {
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalSlides - 1;
        }
    });
}

buildTimeline();