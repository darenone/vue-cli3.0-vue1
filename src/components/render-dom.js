export default {
    functional: true,
    props: {
        name: Number,
        renderFunc: Function
    },
    render: (h, ctx) => {
        // ctx指代当前的对象
        return ctx.props.renderFunc(h, ctx.props.name)
    }
}