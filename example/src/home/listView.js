import BaseView from '../../../dist/view';

class ListView extends BaseView {
    constructor(options = {}) {
        options.events = {
            'click #test': 'theClick'
        };
        super(options);
    }
    render() {

        var object = { foo: null };
        Object.observe(object, function(changes) {
            console.log("Changes: ", changes);
        });

        object.foo = "bar";
        object.foo = null;
        
        let data = this.options.data || [],
            subDom = [];

        data.forEach((model, i) => {
            subDom.push(HBY.h('a#' + model.first, {
                href: '#/home/list',
                style: {
                    display: 'block'
                }
            }, [model.last]));
        });
        let rootNode = HBY.h('div#uuu', subDom);
    	return HBY.createElement(rootNode);
    }
    theClick(event){
        console.warn('eeeeeeeeeeeeee');
    }
}
export default ListView;
