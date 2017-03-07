class HomeView extends Lego.View {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #400': 'theClick'
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let data = this.options.data || [];
        let vDom = hx`
        <div>
          ${data.map((model, i) => {
            return hx`<a id="${model.first}" href="javascript:;" onclick=${this.theClick.bind(this)} style="display:block;">${model.last}</a>\n`
          })}
        </div>`;
        return vDom;
    }
    theClick(event){
        event.stopPropagation();
        Lego.Eventer.trigger('data_update', {aa: 1}, 66);
    }
}
Lego.components('home2', HomeView);
export default HomeView;
