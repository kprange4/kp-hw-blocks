/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import {RichText, PlainText, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import {SelectControl} from '@wordpress/components';
import StarRating from "../../components/StarRating";

export default function Edit({attributes, setAttributes}) {
	return (
		<div {...useBlockProps()}>
			<div className="wp-block-kp-skill-block">
				<div className="skill-icon">
					<div className="photo">
						<img src="https://place-hold.it/75" alt="Skill Icon"/>
					</div>
				</div>
				<div className="text">
					<p className="skill-name">Skill Name</p>
					<p className="skill-category">Skill Category</p>
				</div>
			</div>
		</div>
	);
}
