import { createSignal } from 'solid-js';
import { processInput } from '../shared/processor';
export default function App() {
    const [input, setInput] = createSignal('');
    return (<div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h1>CLI + Web App (SolidJS)</h1>
      <input type="text" placeholder="Enter some input" value={input()} onInput={(e) => setInput(e.currentTarget.value)} style={{ padding: '0.5rem', marginBottom: '1rem', width: '300px' }}/>
      <div>
        <strong>Processed Output:</strong>
        <p>{processInput(input())}</p>
      </div>
    </div>);
}
