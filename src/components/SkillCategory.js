import React, {useState} from 'react';
import {SelectControl} from '@wordpress/components';
import "./SkillCategory.scss";

export default function SkillCategory({category, setCategory}){
	const [select, setSelected] = useState(category || '')
	return (
		<div className="categories">
			<SelectControl
				className="skill-category"
				label="Select a Category"
				value={attributes.category}
				onChange={category => setAttributes({category})}
				options={[
					{value: 'graphic-design', label: "Graphic Design"},
					{value: 'ui-ux-design', label: "UI/UX Design"},
					{value: 'web-development', label: "Web Development"},
					{value: 'illustration', label: "Illustration"},
					{value: 'motion-graphics', label: "Motion Graphics"},
				]}
			/>
	</div>
	);
}
