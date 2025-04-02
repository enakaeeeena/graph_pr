import Buttons from './Buttons';
import ClickCounter from './ClickCounter';
import SortableTable from './SortableTable';

const list = [
  { id: 1, firstName: 'Amaya', lastName: 'Torphy', jobTitle: 'Legacy Group Facilitator', email: 'Rosie_Mann@gmail.com' },
  { id: 2, firstName: 'Weston', lastName: 'Huel', jobTitle: 'Regional Data Agent', email: 'Tristian_Vandervort68@yahoo.com' },
  { id: 3, firstName: 'Bridgette', lastName: 'Corwin', jobTitle: 'Internal Usability Officer', email: 'Sherman.Purdy@hotmail.com' },
];

function App() {
  return (
    <div className="container my-4">
      <Buttons count={4} />
      <ClickCounter />
      <SortableTable data={list} />
    </div>
  );
}

export default App;
