export default function ProjectList({ projects }) {

  return (
    <div className="content">
      {
        projects.map((el, i) => {
          return <img src={el.img} className='content-img' key={i} alt = ""/>
        })
      }
    </div>
  )
}