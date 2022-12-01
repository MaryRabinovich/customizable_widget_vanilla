const formatter = {
    'widget-background': (value) => `.widget-custom {background: ${value};}`,
    'widget-padding': (value) => `.widget-custom {padding: ${value};}`,
    'widget-header-color': (value) => `.widget-custom h3 {color: ${value};}`,
    'widget-paragraph-color': (value) => `.widget-custom p {color: ${value};}`,
    'widget-paragraph-indentation': (value) => `.widget-custom p {text-indent: ${value};}`
}