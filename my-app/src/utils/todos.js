const LS_KEY = 'todo_manager.v1';

const read = () => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
        catch {
        return [];
    }
};
const write = (items) => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
};

export const getById = (id) => {
    const items = getAll();
    return items.find(t => String(t.id) === String(id)) || null;
};

export const update = (id, patch) => {
    const items = getAll();
    const idx = items.findIndex(t => String(t.id) === String(id));
    if (idx === -1) return false;

    items[idx] = {...items[idx], ...patch};
    localStorage.setItem('todo_manager.v1', JSON.stringify(items));
    return true;
};

export const getAll = () => read ();

export const create = (title, description = '') => {
    const trimmed = String(title || '').trim();
    if (!trimmed) return null;

    const todo = {
        id: (crypto?.randomUUID() ?? String(Date.now())),
        title: trimmed,
        description: String(description || '').trim(),
        status: 'active',
        createdAt: new Date().toISOString(),
    };

    const items = read();
    items.unshift(todo);
    write(items);
    return todo;
};

export const toggle = (id) => {
    const items = getAll();
    const idx = items.findIndex(t => String(t.id) === String(id));
    if (idx === -1) return false;
    const current = items[idx];
    const nextStatus = current.status === 'completed' ? 'active' : 'completed';
    items[idx] = {...current, status: nextStatus};
    localStorage.setItem('todo_manager.v1', JSON.stringify(items));
    return true;
};


export const removeByID = (id) => {
    const next = getAll().filter(t => String(t.id) !== String(id));
    localStorage.setItem('todo_manager.v1', JSON.stringify(next));
    return true;
};