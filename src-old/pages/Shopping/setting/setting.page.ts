import { Component } from '@angular/core';
// import { environment } from '';
import { ThemeProvider } from '../providers/theme';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-setting',
	templateUrl: './setting.page.html',
	styleUrls: ['./setting.page.scss'],
})
export class SettingPage {

	list_theme: any;

	constructor(private themeProvider: ThemeProvider) {
		this.list_theme = environment.themes;
	}

	changeTheme(name) {
		this.themeProvider.setTheme(name);
	}
}
