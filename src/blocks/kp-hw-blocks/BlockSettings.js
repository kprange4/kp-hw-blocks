import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, ColorPicker, PanelBody, PanelRow, ToggleControl} from "@wordpress/components";
import colors from "../../common/colors"

export default function BlockSettings({attributes, setAttributes}) {

	return (
		<InspectorControls>
			<PanelBody title="Color" initialOpen={true}>
				<PanelRow>
					<h4>Skill Background Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={backgroundColor => setAttributes({backgroundColor})}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Quote Text Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPicker
						color={attributes.textColor}
						onChange={textColor => setAttributes({textColor})}
						enableAlpha
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title="Orientation" initialOpen={true}>
				<PanelRow>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Vertical Orientation"
						checked={attributes.orientation}
						onChange={ orientation => setAttributes({orientation})}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
