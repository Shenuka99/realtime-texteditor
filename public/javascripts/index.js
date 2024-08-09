function adjustDynamicHeight(){
  const header = document.querySelector('.header')
  const toolbar = document.querySelector('.toolbar')
  const editArea = document.getElementsByTagName('main')[0]


  const headerHeight = header.offsetHeight
  const toolbarHeight = toolbar.offsetHeight
  const topPadding = 8
  const marginBlock = 48
  const paddingBlock = 15



  const editAreaHeight = window.innerHeight - (headerHeight+toolbarHeight+topPadding+marginBlock+paddingBlock) 

  console.log('total', window.innerHeight)
  console.log('header', headerHeight)
  console.log('toolbar', toolbarHeight) 
  console.log('editarea', editAreaHeight)

  editArea.style.height = `${editAreaHeight}px`
}

window.addEventListener('load', adjustDynamicHeight)
window.addEventListener('resize', adjustDynamicHeight)