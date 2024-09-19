import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
const options = [ 'bold', 'italic', '|', 'ul', 'ol', '|', 'font', 'fontsize', '|', 'outdent', 'indent', 'align', '|', 'hr', '|', 'fullsize', 'brush', '|', 'table', 'link', '|', 'undo', 'redo',];

const RichTextEditor = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(() => ({
		
			placeholder: '',
         
            defaultActionOnPaste: 'insert_as_html',
            defaultLineHeight: 1.5,
            enter: 'div',
         
            buttons: options,
            buttonsMD: options,
            buttonsSM: options,
            buttonsXS: options,
            statusbar: false,
            sizeLG: 900,
            sizeMD: 700,
            sizeSM: 400,
            toolbarAdaptive: false,
		}),
		[]
	);

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} 
			onBlur={newContent => setContent(newContent)} 
            onChange={(htmlString) => setContent(htmlString)}
		/>
	);
};