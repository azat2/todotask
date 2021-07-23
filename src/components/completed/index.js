import React, {useState, useRef, lazy} from 'react';
import { useSelector, useDispatch } from "react-redux";

import { handleChange, deletItem } from '../../helpers'

const InputForm = lazy(() => import('../inputForm'));

const CompletedToDos = () => <InputForm title='COMPLEDET' checked={true} status={false}/>

export default CompletedToDos