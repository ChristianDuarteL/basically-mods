let currentSection = "";

export function checkIntersection (element: HTMLElement) {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: .5,
    };

    let observer = new IntersectionObserver((entries) => {
        console.log(entries[0].boundingClientRect);
        //console.log(entries[0].rootBounds);
        if(entries[0].boundingClientRect){
            const { sectionName } = element.dataset;
            currentSection = sectionName;
            document.querySelector('[basically-suffix]').textContent = currentSection;
        }
    }, options);
    observer.observe(element)
    return observer;
}