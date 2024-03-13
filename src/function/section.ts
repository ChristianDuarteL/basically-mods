let currentSection = "";

export function checkIntersection (element: HTMLElement) {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: .5,
    };

    let observer = new IntersectionObserver((entries) => {
        if(entries[0].intersectionRatio > options.threshold){
            const { sectionName } = element.dataset;
            currentSection = sectionName;
            document.querySelector('[basically-suffix]').textContent = currentSection;
        }
    }, options);
    observer.observe(element)
    return observer;
}