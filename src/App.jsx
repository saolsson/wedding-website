const details = {
  couple: 'Kerkira & Spencer',
  date: 'Saturday, October 16, 2027',
  time: '4:00 PM',
  venue: 'Elks Lodge',
  address: '711 Jenifer St, Madison, WI 53703',
  rsvpEmail: 'kerkiraspencer@example.com',
}

export default function App() {
  return (
    <main>
      <header>
        <p className="eyebrow">We're getting married</p>
        <h1>{details.couple}</h1>
        <p>{details.date}</p>
      </header>

      <section>
        <h2>When &amp; Where</h2>
        <p>
          {details.date} at {details.time}
        </p>
        <p>
          {details.venue}
          <br />
          {details.address}
        </p>
      </section>

      <section>
        <h2>RSVP</h2>
        <p>
          Please let us know if you can make it by emailing{' '}
          <a href={`mailto:${details.rsvpEmail}`}>{details.rsvpEmail}</a>.
        </p>
      </section>

      <footer>
        <p>We can't wait to celebrate with you.</p>
      </footer>
    </main>
  )
}
