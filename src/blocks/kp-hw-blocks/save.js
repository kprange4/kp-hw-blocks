/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import './style.scss';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';
import Card from "../../components/Card";
export default function save({attributes}) {
	/**
	 * Style overrides for the block
	 * @type CSSProperties
	 */
	const divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}
	return (
		<div {...useBlockProps.save()}>
			<div className="wp-block-kp-plugin-skill">
				<Card
					styles={divStyles}
					img={
						<div className="skill-icon">
							<img src={attributes.iconURL} alt={"Icon of " + attributes.name}/>
						</div>
					}
					title={
						<div className="skill-info">
							<h3 className="skill-name">{attributes.name}</h3>
						</div>
					}
					content={
						<div className="skill-info">
							<p className="skill-category">{attributes.category}</p>
						</div>
					}
				/>
			</div>
		</div>
	);
}
