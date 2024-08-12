import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeEditorModule } from '../components/code-editor/code-editor.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CodeEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  title = 'constrained-editor-angular-example';
}
