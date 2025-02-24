import React, {useState} from 'react';
import {RangeControl} from '@wordpress/components';
import "./ProficiencyLevel.scss";

export default function ProficiencyLevel({level, setLevel}){
	const [hover, setHover] = useState(level || 0);
	let levels = [
		{value: 1, label:'Beginner'},
		{value: 2, label:'Intermediate'},
		{value: 3, label:'Advanced'},
		{value: 4, label:'Expert'},
		{value: 5, label:'Master'},
	]
	return <div className="levels">
		<RangeControl
			key={level}
			className="level-control"
			__nextHasNoMarginBottom
			__next40pxDefaultSize
			label={levels.value.label}
			value={ level }
			onChange={ ( value ) => setLevel( value ) }
			min={ 1 }
			max={ 5 }
		/>
	</div>
}
