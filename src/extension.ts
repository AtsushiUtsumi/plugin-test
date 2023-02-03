import * as vscode from 'vscode';
import { sub } from "./sub";


// クラスのコードの箇所の一覧を返す
function search_class(code: string): vscode.Range[] {
	
	//console.log('内容:\n' + code);
	
	// クラスの正規表現パターン
	let regexp = /t(e)(st(\d?))/g;
	// const regexp = /class (Hello|World) {/g;
	//const regexp = /class [\s\S]?$/g;
	// これ改行含んでもOKなのかどうも「\s*」がミソっぽい。「.」と違って改行コードも含むらしい。
	regexp = /class\s*([^\{]*)\{\s*.*static\s*void\s*main\s*\(\s*String\s*\[\]\s*[^\)]*\).*/g;
	//regexp = /\s*static\s*void\s*main\s*\(\s*String\s*\[\]\s*[^\)]*\)/g;
	regexp = /class\s*([^\{]*)\{\s*.*\}/g;
	const str = 'test1test2';

	const match = [...code.matchAll(regexp)];

	const hits: vscode.Range[] = [];
	for (let i = 0; i < match.length; i++) {
		console.log(String(i+1) + '件目' + match[i][0]);
		// const start = new vscode.Position(0, 0);
		// const end = new vscode.Position(2, 10);
		// hits.push(new vscode.Range(start, end));
	}
	return hits;
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "plugin-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('plugin-test.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const message = String(vscode.FileType);
		const editor = vscode.window.activeTextEditor;
        if (editor) {
			search_class(editor.document.getText());
            const document = editor.document;// テキスト全体取得
            const selection = editor.selection;// 選択範囲取得
			const text = document.getText(selection);// 選択範囲のテキストを取得
			console.log(selection.start);
			console.log(selection.end);
			vscode.window.showInformationMessage(sub(text));
			editor.edit(
				(editBuilder) => {
					editBuilder.insert(new vscode.Position(0, 0), sub(text));
				}
			);
		}
	});

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('plugin-test.helloWorld2', () => {
		vscode.window.showInformationMessage('Hello World2 from plugin-test!');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('plugin-test.helloWorld3', () => {
		vscode.window.showInformationMessage('コマンドパレットで検索するのは「title」の方で、「command」を上記で登録する(そりゃそうか)');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
