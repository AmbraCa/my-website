
// Funzione per creare e popolare la timeline
function createTimeline() {
    const timelineList = document.querySelector('.timeline-list');

    // Per ogni elemento nel dataset, creiamo un elemento della timeline
    timelineData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('timeline-item', 'clearfix');

        const itemWrapper = document.createElement('div');
        itemWrapper.classList.add('timeline-item-wrapper', 'clearfix');

        const yearDiv = document.createElement('div');
        yearDiv.classList.add('views-field', 'views-field-field-milestone', 'epoc-year');
        yearDiv.textContent = item.year;

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('views-field', 'views-field-field-image', 'epoc-container');

        const imageContent = document.createElement('div');
        imageContent.classList.add('field-content', 'epoc-detail');

        const roundImage = document.createElement('div');
        roundImage.classList.add('roundImage');

        const image = document.createElement('img');
        image.src = item.imageSrc;
        image.alt = item.title;
        image.title = item.title;
        image.classList.add('loading');
        image.setAttribute('data-was-processed', 'true');

        roundImage.appendChild(image);

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('views-field', 'views-field-title', 'custom-title');
        titleDiv.textContent = item.title;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('views-field', 'views-field-body', 'abstract');
        descriptionDiv.innerHTML = item.description;

        // Aggiungiamo gli elementi creati all'elemento della lista
        imageContent.appendChild(roundImage);
        imageContent.appendChild(titleDiv);
        imageContent.appendChild(descriptionDiv);

        imageContainer.appendChild(imageContent);

        itemWrapper.appendChild(yearDiv);
        itemWrapper.appendChild(imageContainer);

        listItem.appendChild(itemWrapper);

        timelineList.appendChild(listItem);
    });
}

// Chiamiamo la funzione per creare la timeline al caricamento della pagina
window.addEventListener('load', createTimeline);
