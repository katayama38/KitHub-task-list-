function openUpdateDialog(id, task, deadline, done) {

    // フォームにタスクの詳細を設定
    document.getElementById('update_id').value = id;
    document.getElementById('update_task').value = task;
    document.getElementById('update_deadline').value = deadline;
    document.getElementById('update_status').value = done.toString();

    // ダイアログを表示
    document.getElementById('updateDialog').style.display = 'block';
}
