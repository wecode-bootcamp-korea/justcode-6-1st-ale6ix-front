import './SubNav.scss'

function SubNav({sublist}){
  return(
    <div className="sub-nav">
      <ul className="sub-menu">
        {sublist.map((subNav,index)=>{
          return <li
          key={index}
          >{subNav.smallCategoryName}</li>
        })}
        
      </ul>
      <div className='sub-menu-img'>
        <img src="http://alessi.co.kr/_dj/img/category_item_img_1.jpg" alt="img"></img>
      </div>
    </div>
  )
}
export default SubNav;