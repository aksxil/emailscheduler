import AddLeadSourceNode from "../components/CustomNodes/AddLeadSourceNode";
import AddMoreNode from "../components/CustomNodes/AddMoreNode";
import ColdEmailNode from "../components/CustomNodes/ColdEmailNode";
import LeadSourceNode from "../components/CustomNodes/LeadSourceNode";
import SequenceStartPointNode from "../components/CustomNodes/SequenceStartPointNode";
import WaitDelayNodes from "../components/CustomNodes/WaitDelayNodes";
export const initialNodes = [{
    id:"1",
    position:{ x: 200, y: 100 },
    data:{title:"Add Lead Source", label:"Click to add leads from List or CRM"},
    type:"addLeadSource",
    draggable:false
},
{
    id:"2",
    position:{ x: 200, y: 300 },
    data:{title:"Sequence Start Point"},
    type:"sequenceStartPoint",
    draggable:false
},
{
    id:"n",
    position:{ x: 200, y: 450 },
    type:"addMoreNode",
    draggable:false
}]

export const initialEdges=[{
    id:"2->n", source:"2", target:"n", type:"straight", sourceHandle:"b"
}]
export const nodeType={
addLeadSource:AddLeadSourceNode,
sequenceStartPoint:SequenceStartPointNode,
addMoreNode:AddMoreNode,
leadSourceNode:LeadSourceNode,
coldEmailNode:ColdEmailNode,
waitDelayNode:WaitDelayNodes
}