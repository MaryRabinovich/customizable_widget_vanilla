const styler = new Styler()

const storage = new Storage()

const customizableProperties = [
    'widget-background',
    'widget-padding',
    'widget-header-color',
    'widget-paragraph-color',
    'widget-paragraph-indentation'
]

customizableProperties.forEach(property => {
    const el = document.getElementById(property)
    const value = storage.get(property)
    if (value) {
        el.value = value
        styler.set(property, formatter[property](value))
    }
        
    el.addEventListener('change', (event) => {
        const value = event.target.value
        storage.set(property, value)
        styler.set(property, formatter[property](value))
    })
})
