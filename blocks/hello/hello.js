/*
export default function decorate(block) {
    const rows = [...block.children];
    [...block.children].forEach((row, r) => {
        if (row[0].querySelector('picture')) {
            if (r == 0) {
                const pic = r.querySelector('picture');
                const image_one = document.createElement('picture');
                image_one.classList.add('picture');
                const text = r.querySelector('textarea');
                const text_one = document.createElement('textarea');
                text_one.classList.add('textarea');
                row.replaceWith(text_one);
                row.replaceWith(image_one, text_one);
            } else if (r == rows.length - 1) {
                const description = document.createElement('div');
                description.classList.add('description');
                row.replaceWith(description);
            }
        } else {
            if (r == 0) {
                const description = document.createElement('div');
                description.classList.add('description');
                row.replaceWith(description);
            }
            if (r == 1) {
                const pic2 = r.querySelector('picture');
                const image_two = document.createElement('picture');
                image_two.classList.add('picture');
                const text = r.querySelector('textarea');
                const text_two = document.createElement('textarea');
                text_two.classList.add('textarea');
                row.replaceWith(text_two);
                row.replaceWith(image_two, text_two);
            }
        }
    });
}
*/
