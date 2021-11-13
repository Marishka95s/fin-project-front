import Chart from './Chart';
import Table from './Table';
import './Diagram.scss';

export default function Diagram() {
  return (
    <section className="diagram">
      <h1 className="diagram__title">Статистика</h1>
      <div className="diagram__data">
        <Chart />
        <Table />
      </div>
    </section>
  );
}
