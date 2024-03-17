let currentSection = "";

export function checkIntersection (element: HTMLElement) {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: .7
    };

    let observer = new IntersectionObserver((entries) => {
        if(entries[0].intersectionRatio >= .7){
            console.log(entries)
            const { sectionName } = element.dataset;
            currentSection = sectionName;
            document.querySelector('[basically-suffix]').textContent = currentSection;
            console.log('a')
        }
    }, options);
    observer.observe(element)
    return observer;
}