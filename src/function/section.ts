let currentSection = "";

export function setSection(sectionName: string){
    currentSection = sectionName;
    document.querySelector('[basically-suffix]').textContent = currentSection;
}

export function checkIntersection (element: HTMLElement) {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: .5
    };

    let observer = new IntersectionObserver((entries) => {
        if(entries[0].intersectionRatio >= .5){
            const { sectionName } = element.dataset;
            setSection(sectionName);
        }
    }, options);
    observer.observe(element)
    return observer;
}