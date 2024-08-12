import { Component, type OnInit } from '@angular/core';

// @ts-expect-error: This package has no type declarations (index.d.ts)
import * as constrainedPlugin from 'constrained-editor-plugin';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  model = ['Blocked section...', 'Editable section: Type here'].join('\n');

  options = {
    theme: 'vs-dark',
    language: 'text/plain',
  };

  constructor() {}

  ngOnInit() {}

  handleEditorInit(monacoInstance: any) {
    console.warn(monacoInstance);

    const monacoModel = monacoInstance.getModel();

    const constrainedInstance = constrainedPlugin.constrainedEditor(
      (window as any)['monaco']
    );

    constrainedInstance.initializeIn(monacoInstance);

    const restrictions = [
      {
        range: [2, 19, 2, 28],
        label: 'restriction1',
        allowMultiline: false,
      },
    ];

    constrainedInstance.addRestrictionsTo(monacoModel, restrictions);
    monacoModel.toggleHighlightOfEditableAreas();
  }
}
