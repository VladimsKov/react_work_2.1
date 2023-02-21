export default function Toolbar({ filters, selected, onSelectFilter }) {
  let classN = "btn";
  return (
    <div className="toolbar-container">
      {filters.map((value, i) => {
      (i === 0)? classN = "btn active" : classN = "btn";
        return <button className={classN} onClick={(e) => {
          onSelectFilter(value);
          const activeEl = Array.from(e.currentTarget.parentElement.children).find(el => el.textContent === selected);
          activeEl.classList.remove('active');
          e.currentTarget.classList.add('active');
        }} key={i}>{value}</button>
      })}
    </div>
  )
}