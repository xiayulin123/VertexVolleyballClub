export default function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <h3 className="program-card__title">{program.name}</h3>
      <dl className="program-card__meta">
        <div>
          <dt>Ages</dt>
          <dd>{program.ages}</dd>
        </div>
        <div>
          <dt>Roster</dt>
          <dd>{program.roster}</dd>
        </div>
      </dl>
      <div>
        <p className="program-card__label">Focus</p>
        <ul className="program-card__tags">
          {program.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
