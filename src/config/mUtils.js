/**
 * 存储 localStorage
 * @param {*} name
 * @param {*} contont
 */
export const setStore = (name, contont) => {
  if (!name) return
  if (typeof contont !== 'string') {
    contont = JSON.stringify(contont)
  }
  window.localStorage.setItem(name, contont)
}

/**
 * 获取 localStorage
 * @param {*} name
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除 localStorage
 * @param {*} name
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
