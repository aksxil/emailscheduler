import '@xyflow/react/dist/style.css';
import ReactFlowComponents from './components/ReactFlowComponents';
import { useContext } from 'react';
import { AppContext } from './components/ContextProvider';
import Modal from './components/ModalComponent/Modal';
import ErrorModal from './components/ModalComponent/ErrorModal';
function App() {
  const {modalOpen,errorModal, nodes,edges} = useContext(AppContext);
  console.log(nodes,edges)
  return (
    <>
    <div className="h-screen">
      <div className=' h-14 w-full bg-slate-600 text-white flex items-center justify-center'>
        <h1 className=' font-semibold'>Email Scheduler</h1>
      </div>
    <ReactFlowComponents/>
    </div>
    {modalOpen && <Modal/>}
    {errorModal && <ErrorModal/>}
    </>
  )
}

export default App
