import './CSS/App.css';
import buildings from './data.js';
import Table from './components/Table.js';
import Paragraphs from './components/Dop_zad.js';

function App() {
  const par = [
    "Зачет по дисциплине выставляется по рейтингу. Для получения зачета необходимо получить не менее 60% по каждому элементу рейтинга.",
    "Рейтинг включает три вида заданий. Каждое задание состоит из аудиторной работы и индивидуального задания.",
    "Для тех, кто получил незачет по дисциплине. Для допуска к повторным аттестациям необходимо выполнить как минимум 50% процентов каждого задания, входящего в рейтинг."
  ];

  return (
    <div className="App">
       <h3>Самые высокие здания и сооружения</h3>
       <Table data={buildings} amountRows='15' showPag={true} />
       <Paragraphs par={par} />  {}
    </div>
  );
}

export default App;