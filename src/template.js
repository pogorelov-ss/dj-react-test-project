import template from './index.html'

export default reactApp => {
  return template.replace('${react-app}$', reactApp)
}
