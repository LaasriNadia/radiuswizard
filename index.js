function radiuswizard(options) {
    let elements = document.querySelectorAll('.radiuswizard')


    elements.forEach(el => {
        el.style.borderRadius = `25px`
        if (options.circle) {
            el.style.borderRadius = '50%'
        }
    })

}

module.exports.radiuswizard = radiuswizard