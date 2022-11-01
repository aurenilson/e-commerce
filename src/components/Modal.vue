<template>
    <div>
        <button
            uk-toggle="target: #my-id"
            type="button"
            class="uk-button uk-button-primary"
        >
            Abrir Modal
        </button>
        <!-- This is the modal -->
        <div id="my-id" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">Isso é um Modal</h2>
                <div class="uk-padding-large">
                    <!-- <RouterView /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal'
    }
</script>